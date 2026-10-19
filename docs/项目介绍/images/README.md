# 项目介绍配图

这些文件与上一级的 `项目介绍.md` 配套，保存或移动介绍时请保留整个 `images/` 文件夹。

| 文件 | 内容 | 来源 |
| --- | --- | --- |
| `01-home.jpg` | 首页轮播与导航 | 2026-10-19 本地生产预览截图 |
| `02-category.jpg` | 移除大图标、复用公共按钮的 AI 分类页 | 同日已验证的页面截图 |
| `03-configuration.jpg` | AEB35-04 + H02 配置选择、兼容机箱和参数表 | 本地真实 UI 操作后的截图 |
| `04-search.jpg` | Intel 9-36V 搜索及匹配参数 | 本地真实结果，不是后期绘制 |
| `05-mobile.jpg` | 390px 手机尺寸下的产品入口与 SVG 箭头 | 同日已验证的页面截图 |
| `06-architecture.png` / `.svg` | 网站内容、路由、交互与维护的整体关系 | 根据仓库源码绘制 |
| `07-configuration-flow.png` / `.svg` | MCAIPC2 兼容关系、配置联动和 URL 状态 | 根据目录和组件逻辑绘制 |

JPG 是浏览器直接保存的截图，未做界面重绘。架构图的 SVG 是可编辑源文件，PNG 为相同图形的栅格版本，便于 Markdown 阅读器显示。没有使用 AI 生成网站截图，也没有使用虚构的访问量或转化图表。

如修改 SVG，可使用项目现有的 Sharp 依赖重新生成 PNG。在项目根目录运行以下命令；它只处理架构图，不修改截图：

```bash
node -e "const sharp=require('sharp'); Promise.all(['06-architecture','07-configuration-flow'].map(name=>sharp('docs/项目介绍/images/'+name+'.svg').png().toFile('docs/项目介绍/images/'+name+'.png'))).catch(error=>{console.error(error);process.exitCode=1})"
```

所有页面截图均来自 `127.0.0.1` 预览，不作为线上部署完成、GA4 数据到达或业务效果的证明。
