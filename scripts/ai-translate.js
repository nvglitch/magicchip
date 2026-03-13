#!/usr/bin/env node

/**
 * AI Translation Script for MagicChip i18n
 *
 * This script uses AI models to automatically translate all content
 * from English to target languages (French, German, Italian, Spanish)
 *
 * Usage:
 *   node scripts/ai-translate.js
 *
 * Environment variables:
 *   AI_BASE_URL - API base URL (e.g., https://api.openai.com/v1)
 *   AI_API_KEY - Your API key
 *   AI_MODEL - Model name (default: gpt-4)
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Configuration
const LOCALES_DIR = path.join(__dirname, '../lib/i18n/locales');
const TARGET_LANGUAGES = {
  fr: 'French',
  de: 'German',
  it: 'Italian',
  es: 'Spanish'
};

// Translation prompt template
const TRANSLATION_PROMPT = `You are a professional translator specializing in technical and business content for a semiconductor/hardware company.

IMPORTANT INSTRUCTIONS:
1. Translate the following TypeScript translation file from English to {TARGET_LANGUAGE}
2. Keep ALL keys exactly the same - only translate the string VALUES
3. Maintain the exact TypeScript structure and syntax
4. Keep technical terms accurate and consistent
5. Preserve all special characters, quotes, and formatting
6. Do NOT translate:
   - Variable names
   - Object keys
   - Import statements
   - Type annotations
   - Code comments in English
7. Use professional, business-appropriate language
8. Keep string lengths reasonable for UI display
9. Return ONLY the complete translated TypeScript file content, no explanations

Source file to translate:

\`\`\`typescript
{SOURCE_CONTENT}
\`\`\`

Translate to {TARGET_LANGUAGE} and return the complete file.`;

// API call function
async function callAI(prompt, baseUrl, apiKey, model) {
  const fetch = (await import('node-fetch')).default;

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: model,
      messages: [
        {
          role: 'system',
          content: 'You are a professional translator for technical documentation. Return only the translated code without any explanations or markdown formatting.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 16000
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API request failed: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Extract TypeScript code from markdown if present
function extractCode(content) {
  // Remove markdown code blocks if present
  const codeBlockMatch = content.match(/```(?:typescript|ts)?\n([\s\S]+?)\n```/);
  if (codeBlockMatch) {
    return codeBlockMatch[1];
  }
  return content;
}

// Validate translated file
function validateTranslation(content, targetLang) {
  // Check if it's valid TypeScript
  if (!content.includes('import { TranslationSchema }')) {
    throw new Error('Missing import statement');
  }

  if (!content.includes(`export const ${targetLang}:`)) {
    throw new Error(`Missing export statement for ${targetLang}`);
  }

  // Check for common issues
  if (content.includes('```')) {
    console.warn('⚠️  Warning: Content contains markdown code blocks, cleaning...');
    content = extractCode(content);
  }

  return content;
}

// Translate a single language
async function translateLanguage(targetLang, languageName, baseUrl, apiKey, model) {
  console.log(`\n📝 Translating to ${languageName} (${targetLang})...`);

  // Read English source
  const enPath = path.join(LOCALES_DIR, 'en.ts');
  const enContent = fs.readFileSync(enPath, 'utf8');

  // Prepare prompt
  const prompt = TRANSLATION_PROMPT
    .replace(/{TARGET_LANGUAGE}/g, languageName)
    .replace(/{SOURCE_CONTENT}/g, enContent);

  console.log(`   Calling AI model (${model})...`);

  try {
    let translatedContent = await callAI(prompt, baseUrl, apiKey, model);

    // Clean and validate
    translatedContent = extractCode(translatedContent);
    translatedContent = validateTranslation(translatedContent, targetLang);

    // Write to file
    const targetPath = path.join(LOCALES_DIR, `${targetLang}.ts`);
    fs.writeFileSync(targetPath, translatedContent, 'utf8');

    console.log(`   ✅ Successfully translated and saved to ${targetLang}.ts`);
    return true;
  } catch (error) {
    console.error(`   ❌ Error translating ${languageName}:`, error.message);
    return false;
  }
}

// Interactive prompt for configuration
async function getConfig() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (prompt) => new Promise((resolve) => {
    rl.question(prompt, resolve);
  });

  console.log('🌍 AI Translation Script for MagicChip\n');
  console.log('This script will translate all content from English to French, German, Italian, and Spanish.\n');

  // Check environment variables first
  let baseUrl = process.env.AI_BASE_URL;
  let apiKey = process.env.AI_API_KEY;
  let model = process.env.AI_MODEL || 'gpt-4';

  if (!baseUrl) {
    baseUrl = await question('Enter API Base URL (e.g., https://api.openai.com/v1): ');
  } else {
    console.log(`Using API Base URL from env: ${baseUrl}`);
  }

  if (!apiKey) {
    apiKey = await question('Enter API Key: ');
  } else {
    console.log('Using API Key from env: ****' + apiKey.slice(-4));
  }

  const modelInput = await question(`Enter Model Name (default: ${model}): `);
  if (modelInput.trim()) {
    model = modelInput.trim();
  }

  console.log(`\nUsing model: ${model}\n`);

  // Confirm
  const confirm = await question('Start translation? (y/n): ');
  rl.close();

  if (confirm.toLowerCase() !== 'y') {
    console.log('Translation cancelled.');
    process.exit(0);
  }

  return { baseUrl, apiKey, model };
}

// Main function
async function main() {
  try {
    // Get configuration
    const { baseUrl, apiKey, model } = await getConfig();

    console.log('\n🚀 Starting translation process...\n');
    console.log('Languages to translate:', Object.values(TARGET_LANGUAGES).join(', '));
    console.log('─'.repeat(60));

    const results = {
      success: [],
      failed: []
    };

    // Translate each language
    for (const [langCode, langName] of Object.entries(TARGET_LANGUAGES)) {
      const success = await translateLanguage(langCode, langName, baseUrl, apiKey, model);

      if (success) {
        results.success.push(langName);
      } else {
        results.failed.push(langName);
      }

      // Add delay between requests to avoid rate limiting
      if (Object.keys(TARGET_LANGUAGES).indexOf(langCode) < Object.keys(TARGET_LANGUAGES).length - 1) {
        console.log('   ⏳ Waiting 2 seconds before next translation...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    // Summary
    console.log('\n' + '─'.repeat(60));
    console.log('\n📊 Translation Summary:\n');

    if (results.success.length > 0) {
      console.log(`✅ Successfully translated: ${results.success.join(', ')}`);
    }

    if (results.failed.length > 0) {
      console.log(`❌ Failed to translate: ${results.failed.join(', ')}`);
    }

    console.log('\n💡 Next steps:');
    console.log('   1. Review the translated files in lib/i18n/locales/');
    console.log('   2. Test the translations in your application');
    console.log('   3. Run: npm run build');
    console.log('   4. Consider having native speakers review the translations\n');

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run
main();
