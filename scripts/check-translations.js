#!/usr/bin/env node

/**
 * Translation Helper Script
 *
 * This script helps manage translations by:
 * 1. Validating all translation files have the same keys
 * 2. Finding missing translations
 * 3. Generating translation templates
 *
 * Usage:
 *   node scripts/check-translations.js
 */

const fs = require('fs');
const path = require('path');

const LOCALES_DIR = path.join(__dirname, '../lib/i18n/locales');
const SUPPORTED_LANGUAGES = ['en', 'fr', 'de', 'it', 'es'];

function getAllKeys(obj, prefix = '') {
  let keys = [];

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && !Array.isArray(value)) {
      keys = keys.concat(getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys;
}

function loadTranslation(lang) {
  try {
    const filePath = path.join(LOCALES_DIR, `${lang}.ts`);
    const content = fs.readFileSync(filePath, 'utf8');

    // Simple extraction - in production, use proper AST parsing
    const match = content.match(/export const \w+: TranslationSchema = ({[\s\S]+});/);
    if (match) {
      // This is a simplified approach - use proper TypeScript parser in production
      return eval(`(${match[1]})`);
    }
  } catch (error) {
    console.error(`Error loading ${lang}:`, error.message);
  }
  return null;
}

function checkTranslations() {
  console.log('🔍 Checking translations...\n');

  const enTranslation = loadTranslation('en');
  if (!enTranslation) {
    console.error('❌ Failed to load English translations');
    return;
  }

  const enKeys = getAllKeys(enTranslation);
  console.log(`✅ English has ${enKeys.length} translation keys\n`);

  for (const lang of SUPPORTED_LANGUAGES) {
    if (lang === 'en') continue;

    console.log(`Checking ${lang}...`);
    const translation = loadTranslation(lang);

    if (!translation) {
      console.log(`  ⚠️  Translation file not found or invalid\n`);
      continue;
    }

    const langKeys = getAllKeys(translation);
    const missing = enKeys.filter(key => !langKeys.includes(key));
    const extra = langKeys.filter(key => !enKeys.includes(key));

    if (missing.length === 0 && extra.length === 0) {
      console.log(`  ✅ Complete (${langKeys.length} keys)\n`);
    } else {
      if (missing.length > 0) {
        console.log(`  ⚠️  Missing ${missing.length} keys:`);
        missing.slice(0, 5).forEach(key => console.log(`     - ${key}`));
        if (missing.length > 5) {
          console.log(`     ... and ${missing.length - 5} more`);
        }
      }
      if (extra.length > 0) {
        console.log(`  ⚠️  Extra ${extra.length} keys (not in English)`);
      }
      console.log();
    }
  }
}

function generateTemplate(targetLang) {
  console.log(`📝 Generating template for ${targetLang}...\n`);

  const enPath = path.join(LOCALES_DIR, 'en.ts');
  const targetPath = path.join(LOCALES_DIR, `${targetLang}.ts`);

  let content = fs.readFileSync(enPath, 'utf8');
  content = content.replace(/export const en:/g, `export const ${targetLang}:`);

  fs.writeFileSync(targetPath, content);
  console.log(`✅ Template created at ${targetPath}`);
  console.log(`   Please translate all string values while keeping the keys unchanged.\n`);
}

// Main execution
const command = process.argv[2];

if (command === 'generate' && process.argv[3]) {
  generateTemplate(process.argv[3]);
} else {
  checkTranslations();
}

console.log('💡 Tips:');
console.log('   - Keep technical terms consistent');
console.log('   - Consider string length for UI layout');
console.log('   - Test on actual devices after translation');
console.log('   - Use native speakers for review\n');
