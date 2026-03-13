#!/usr/bin/env node

/**
 * Translation Validator
 * Checks if translated files are valid and complete
 */

const fs = require('fs');
const path = require('path');

const LOCALES_DIR = path.join(__dirname, '../lib/i18n/locales');
const LANGUAGES = ['en', 'fr', 'de', 'it', 'es'];

function extractKeys(obj, prefix = '') {
  let keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      keys = keys.concat(extractKeys(value, fullKey));
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

    // Simple eval (in production use proper TS parser)
    const match = content.match(/export const \w+: TranslationSchema = ({[\s\S]+});/);
    if (match) {
      return eval(`(${match[1]})`);
    }
  } catch (error) {
    return null;
  }
  return null;
}

function validateTranslation() {
  console.log('🔍 Validating translations...\n');

  const enData = loadTranslation('en');
  if (!enData) {
    console.error('❌ Failed to load English translation');
    return;
  }

  const enKeys = extractKeys(enData);
  console.log(`✅ English has ${enKeys.length} keys\n`);

  const results = {};

  for (const lang of LANGUAGES) {
    if (lang === 'en') continue;

    console.log(`Checking ${lang.toUpperCase()}...`);
    const data = loadTranslation(lang);

    if (!data) {
      console.log(`  ❌ File not found or invalid\n`);
      results[lang] = { status: 'missing', coverage: 0 };
      continue;
    }

    const langKeys = extractKeys(data);
    const missing = enKeys.filter(k => !langKeys.includes(k));
    const extra = langKeys.filter(k => !enKeys.includes(k));
    const coverage = ((langKeys.length / enKeys.length) * 100).toFixed(1);

    if (missing.length === 0 && extra.length === 0) {
      console.log(`  ✅ Complete (${langKeys.length}/${enKeys.length} keys, ${coverage}%)\n`);
      results[lang] = { status: 'complete', coverage: 100 };
    } else {
      console.log(`  ⚠️  Incomplete (${langKeys.length}/${enKeys.length} keys, ${coverage}%)`);
      if (missing.length > 0) {
        console.log(`     Missing: ${missing.length} keys`);
      }
      if (extra.length > 0) {
        console.log(`     Extra: ${extra.length} keys`);
      }
      console.log();
      results[lang] = { status: 'incomplete', coverage: parseFloat(coverage) };
    }
  }

  // Summary
  console.log('─'.repeat(50));
  console.log('\n📊 Summary:\n');

  const complete = Object.values(results).filter(r => r.status === 'complete').length;
  const incomplete = Object.values(results).filter(r => r.status === 'incomplete').length;
  const missing = Object.values(results).filter(r => r.status === 'missing').length;

  console.log(`✅ Complete: ${complete}`);
  console.log(`⚠️  Incomplete: ${incomplete}`);
  console.log(`❌ Missing: ${missing}`);

  const avgCoverage = Object.values(results).reduce((sum, r) => sum + r.coverage, 0) / Object.keys(results).length;
  console.log(`\n📈 Average coverage: ${avgCoverage.toFixed(1)}%\n`);

  if (complete === Object.keys(results).length) {
    console.log('🎉 All translations are complete!\n');
  } else {
    console.log('💡 Run translation script to complete missing translations:\n');
    console.log('   npm run translate:quick <url> <key> <model>\n');
  }
}

validateTranslation();
