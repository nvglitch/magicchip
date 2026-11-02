# 暂存的在线询盘版本

2026-11-02 用户要求暂缓在线提交，等待腾讯云发信配置完成后再启用。当前网站继续使用原来的邮件草稿方式，首页和 Contact 表单不会调用在线提交接口。AI 分类页五语翻译和 SEO 修改保留。

## 保存位置

- 功能快照：[online-inquiry-ses-2026-11-02.zip](online-inquiry-ses-2026-11-02.zip)
- SHA-256：`77b029fb956f93670fe7c8a8227ecd5b7848fba3d3194392b1ed6193823dca5f`
- 已验证 ZIP 内容完整，且恢复补丁在回退后的项目上通过 `git apply --check`。
- 保存 19 个功能文件的启用版本、10 个原文件的基线、恢复补丁、逐文件 SHA-256、当时的 Git HEAD 和完整接入报告。
- 仅包含功能源码、空配置示例、通知模板及测试；不包含真实密钥、依赖目录、构建产物或 Git 仓库。

## 后续恢复

收到用户“发信已配置好，启用在线询盘”等明确通知后：

1. 解压到项目内的临时目录，核对快照 SHA-256 与 `manifest.json`。不要将 `enabled/` 整目录直接覆盖当前项目。
2. 在项目根目录执行 `git apply --check <解压目录>/online-inquiry.patch`。通过后执行 `git apply <解压目录>/online-inquiry.patch`。
3. 如果项目已经发生变化导致检查不通过，根据 `base/` 和 `enabled/` 中的完整文件合并，保留后续产品、翻译和页面修改，无需从头重写。
4. 参考压缩包内 `enabled/docs/在线询盘与核心翻译-2026-11-02.md` 完成 SES 配置；完整 HTML 通知模板及 `.env.inquiry.example` 也在包内。这版没有新增 npm 依赖。
5. 运行 `node scripts/test-inquiries.cjs`、`node scripts/test-analytics.cjs`、`npm run build`，启动本地服务后运行 `node scripts/test-inquiry-pages.cjs`。线上还须确认真实收件、Reply-To、失败提示及 GA4 关键事件配置。
6. 重新启用后，同步更新本说明、项目 README、AGENTS.md 中的暂缓状态；当时的备份作为历史记录保留。

本次不自动提交、推送或发布。恢复补丁本身也不会自动配置云账户或发送邮件。
