#!/usr/bin/env node

/**
 * Quick AI Translation Script
 *
 * Usage:
 *   node scripts/quick-translate.js <base-url> <api-key> [model]
 *
 * Example:
 *   node scripts/quick-translate.js https://api.openai.com/v1 sk-xxx gpt-4
 *   node scripts/quick-translate.js https://api.deepseek.com/v1 sk-xxx deepseek-chat
 */

const fs = require('fs');
const path = require('path');

// Get arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('❌ Usage: node quick-translate.js <base-url> <api-key> [model]');
  console.error('Example: node quick-translate.js https://api.openai.com/v1 sk-xxx gpt-4');
  process.exit(1);
}

const [baseUrl, apiKey, model = 'gpt-4'] = args;

const LOCALES_DIR = path.join(__dirname, '../lib/i18n/locales');

// Hardcoded translation prompt
const SYSTEM_PROMPT = `You are a professional translator for a semiconductor/hardware technology company.
Translate TypeScript i18n files while:
- Keeping ALL keys unchanged
- Translating only string values
- Maintaining technical accuracy
- Using professional business language
- Preserving TypeScript syntax perfectly
Return ONLY the translated TypeScript code, no explanations.`;

const USER_PROMPT_TEMPLATE = `Translate this TypeScript i18n file from English to {LANGUAGE}.
Keep the structure identical, translate only the string values.

{SOURCE}

Return the complete translated file for language code: {CODE}`;

// Languages to translate
const LANGUAGES = [
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'es', name: 'Spanish' }
];

async function translate(langCode, langName) {
  console.log(`\n🔄 Translating to ${langName}...`);

  const enContent = fs.readFileSync(path.join(LOCALES_DIR, 'en.ts'), 'utf8');
  const userPrompt = USER_PROMPT_TEMPLATE
    .replace('{LANGUAGE}', langName)
    .replace('{SOURCE}', enContent)
    .replace('{CODE}', langCode);

  try {
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
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.3,
        max_tokens: 16000
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    let content = data.choices[0].message.content;

    // Clean markdown if present
    const match = content.match(/```(?:typescript|ts)?\n([\s\S]+?)\n```/);
    if (match) content = match[1];

    // Validate
    if (!content.includes(`export const ${langCode}:`)) {
      throw new Error('Invalid translation format');
    }

    fs.writeFileSync(path.join(LOCALES_DIR, `${langCode}.ts`), content, 'utf8');
    console.log(`✅ ${langName} completed`);
    return true;
  } catch (error) {
    console.error(`❌ ${langName} failed:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🌍 AI Translation Script');
  console.log(`📡 API: ${baseUrl}`);
  console.log(`🤖 Model: ${model}`);
  console.log(`🔑 Key: ****${apiKey.slice(-4)}\n`);

  const results = { success: 0, failed: 0 };

  for (const lang of LANGUAGES) {
    const success = await translate(lang.code, lang.name);
    if (success) results.success++;
    else results.failed++;

    // Rate limit delay
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log(`\n📊 Results: ${results.success} success, ${results.failed} failed`);
  console.log('✨ Done! Check lib/i18n/locales/ for translated files.\n');
}

main().catch(console.error);
