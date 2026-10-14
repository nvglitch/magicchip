# 多语言路由

支持 en、de、fr、it、es。所有页面位于 app/[lang]，语言由网址决定，不用浏览器偏好覆盖明确的语言网址。

## 访问规则

- /de/products/... 始终为德语，刷新、分享和历史前进后退都遵从网址。
- 切换语言只替换语言前缀，保留页面路径、查询参数和 #sku-...。
- 无语言前缀的旧深层链接永久 308 到对应 /en/...；型号别名随后按该语言跳转到当前系列/SKU。
- 直接访问主域名 /，先使用有效的 magicchip-language Cookie，再根据 Accept-Language，最后回退英文。此 307 跳转禁止共享缓存。
- 静态资源、PDF、API、robots.txt、sitemap.xml 不添加前缀。

## 渲染与导航

app/[lang]/layout.tsx 在服务端校验语言，传入相应 dictionaries 和 HTML lang。LanguageProvider 不再先渲染英文再异步读取另一种语言；当前页面语言直接来自服务端参数。

普通站内导航使用 components/LocalizedLink；自定义 router.push 和跳转调用 lib/i18n/routing.ts 的 localizedHref。不要硬编码回无前缀网址。外部、mailto、tel、下载和页内锚点保持原来的行为。新增界面依然覆盖五种语言，不添加中文网站文案。

当前 Cookie 保存浏览过的语言，用于下次从主域名入口选择首页，最长一年；兼容保留旧 localStorage 键。即使存储被禁用，显式语言网址仍然有效。Cookie 说明已同步。

各语言页面有自己的 canonical、hreflang 和站点地图记录；五种语言共用同一套产品数据。迁移路由不会自动翻译原本未翻译的产品资料，型号和技术数据保留原始内容。

## 验证

npm run build
node scripts/test-site-search.cjs
TEST_ORIGIN 指向正在运行的本地服务后执行 node scripts/test-language-routing.cjs（默认 http://127.0.0.1:3109）。

路由测试覆盖首屏语言、偏好冲突、旧路由、SKU、查询参数、资源、SEO 和 404。浏览器另外验证切换、刷新、历史导航及手机布局。
