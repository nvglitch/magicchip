# AI 自动翻译脚本使用指南

## 概述

提供两个脚本来自动翻译网站内容到法语、德语、意大利语和西班牙语。

## 脚本选择

### 1. 交互式脚本 (推荐新手)
**文件**: `scripts/ai-translate.js`

**特点**:
- 交互式提示输入配置
- 支持环境变量
- 详细的进度显示
- 自动验证翻译结果

**使用方法**:
```bash
node scripts/ai-translate.js
```

然后按提示输入：
1. API Base URL (例如: https://api.openai.com/v1)
2. API Key
3. Model Name (默认: gpt-4)

### 2. 快速脚本 (推荐熟练用户)
**文件**: `scripts/quick-translate.js`

**特点**:
- 命令行参数直接运行
- 快速简洁
- 适合脚本化和自动化

**使用方法**:
```bash
node scripts/quick-translate.js <base-url> <api-key> [model]
```

**示例**:
```bash
# OpenAI
node scripts/quick-translate.js https://api.openai.com/v1 sk-xxx gpt-4

# DeepSeek
node scripts/quick-translate.js https://api.deepseek.com/v1 sk-xxx deepseek-chat

# Claude (通过代理)
node scripts/quick-translate.js https://api.anthropic.com/v1 sk-ant-xxx claude-3-opus-20240229

# 本地模型
node scripts/quick-translate.js http://localhost:11434/v1 ollama qwen2.5:72b
```

## 支持的 API 提供商

### OpenAI
```bash
Base URL: https://api.openai.com/v1
Models: gpt-4, gpt-4-turbo, gpt-3.5-turbo
```

### DeepSeek
```bash
Base URL: https://api.deepseek.com/v1
Models: deepseek-chat, deepseek-coder
```

### Anthropic Claude
```bash
Base URL: https://api.anthropic.com/v1
Models: claude-3-opus-20240229, claude-3-sonnet-20240229
注意: 可能需要适配器或代理
```

### 本地模型 (Ollama)
```bash
Base URL: http://localhost:11434/v1
Models: qwen2.5:72b, llama3.1:70b, mixtral:8x7b
```

### 其他兼容 OpenAI API 的服务
任何兼容 OpenAI Chat Completions API 的服务都可以使用

## 使用环境变量 (可选)

创建 `.env` 文件或设置环境变量：

```bash
# Linux/Mac
export AI_BASE_URL="https://api.openai.com/v1"
export AI_API_KEY="sk-xxx"
export AI_MODEL="gpt-4"

# Windows CMD
set AI_BASE_URL=https://api.openai.com/v1
set AI_API_KEY=sk-xxx
set AI_MODEL=gpt-4

# Windows PowerShell
$env:AI_BASE_URL="https://api.openai.com/v1"
$env:AI_API_KEY="sk-xxx"
$env:AI_MODEL="gpt-4"
```

然后直接运行：
```bash
node scripts/ai-translate.js
```

## 翻译流程

1. **准备**
   - 确保 `lib/i18n/locales/en.ts` 是最新的英文版本
   - 安装依赖: `npm install node-fetch`

2. **运行脚本**
   ```bash
   node scripts/quick-translate.js <your-api-url> <your-api-key> <model>
   ```

3. **等待完成**
   - 脚本会依次翻译 4 种语言
   - 每个语言之间有 2 秒延迟（避免速率限制）
   - 总耗时约 2-5 分钟（取决于 API 速度）

4. **验证结果**
   - 检查 `lib/i18n/locales/` 目录
   - 应该看到更新的 fr.ts, de.ts, it.ts, es.ts

5. **测试**
   ```bash
   npm run build
   npm run dev
   ```
   在浏览器中测试语言切换

## 翻译质量提示

### 推荐模型（按质量排序）

1. **最佳质量** (较贵)
   - GPT-4 Turbo
   - Claude 3 Opus
   - DeepSeek V3

2. **良好质量** (性价比高)
   - GPT-4
   - Claude 3 Sonnet
   - DeepSeek Chat

3. **基础质量** (便宜)
   - GPT-3.5 Turbo
   - Qwen 2.5 72B (本地)

### 提高翻译质量的技巧

1. **使用更好的模型**: GPT-4 > GPT-3.5
2. **检查技术术语**: 确保专业术语翻译准确
3. **人工审核**: 让母语者审核关键页面
4. **迭代改进**: 发现问题后重新翻译特定部分

## 成本估算

基于 OpenAI 定价（2024）：

- **GPT-4**: ~$0.50-1.00 per language (4 languages = $2-4)
- **GPT-3.5**: ~$0.05-0.10 per language (4 languages = $0.20-0.40)
- **本地模型**: 免费（需要本地算力）

## 故障排除

### 问题: API 请求失败
**解决**:
- 检查 API Key 是否正确
- 检查 Base URL 格式
- 确认账户有余额
- 检查网络连接

### 问题: 翻译格式错误
**解决**:
- 使用更好的模型（GPT-4 而不是 GPT-3.5）
- 检查返回的内容是否包含 markdown 代码块
- 脚本会自动清理，但可能需要手动调整

### 问题: 速率限制
**解决**:
- 脚本已内置 2 秒延迟
- 如果仍然遇到限制，增加延迟时间
- 使用更高级别的 API 账户

### 问题: 翻译不准确
**解决**:
- 使用更好的模型
- 调整 temperature 参数（在脚本中修改）
- 手动修正关键术语
- 考虑专业翻译服务

## 手动翻译特定语言

如果只想翻译某一种语言，可以修改脚本中的 `LANGUAGES` 数组：

```javascript
// 只翻译法语
const LANGUAGES = [
  { code: 'fr', name: 'French' }
];
```

## 高级用法

### 自定义翻译提示词

编辑脚本中的 `SYSTEM_PROMPT` 和 `USER_PROMPT_TEMPLATE` 来调整翻译风格：

```javascript
const SYSTEM_PROMPT = `你是专业的技术翻译...
- 使用更正式/非正式的语气
- 强调某些术语的翻译方式
- 添加特定行业的上下文
`;
```

### 批量处理多个项目

创建一个包装脚本：

```bash
#!/bin/bash
for project in project1 project2 project3; do
  cd $project
  node scripts/quick-translate.js $API_URL $API_KEY $MODEL
  cd ..
done
```

## 后续步骤

翻译完成后：

1. ✅ 运行构建测试: `npm run build`
2. ✅ 在浏览器中测试所有语言
3. ✅ 检查 UI 布局（某些语言文本可能更长）
4. ✅ 让母语者审核翻译质量
5. ✅ 提交到版本控制

## 维护

当英文内容更新时：

1. 更新 `lib/i18n/locales/en.ts`
2. 重新运行翻译脚本
3. 或者只翻译新增的部分（手动）

## 支持

遇到问题？

1. 检查本文档的故障排除部分
2. 查看脚本输出的错误信息
3. 检查 API 提供商的文档
4. 提交 Issue 到项目仓库

---

**提示**: 首次使用建议先用 GPT-3.5 测试，确认流程正常后再用 GPT-4 进行正式翻译。
