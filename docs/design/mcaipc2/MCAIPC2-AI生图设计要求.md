# MCAIPC2 阿里国际站详情页：AI 生图设计要求

版本：2026-09-20｜确认方案：H04-BQ 机箱 + AXB35-02 主板系列｜交付语言：英文｜内部说明：中文

## 1. 如何直接使用

本方案制作 9 张连续的产品详情图，不包含工厂、OEM/ODM、询盘、联系方式或其他机箱。主推消费级 AI PC 的硬件与用途，延续 MCAIPC1 的黑橙色科技视觉和内容节奏。

1. 每次只生成一屏。打开 `prompts` 中对应编号的 TXT，全文复制给生图 AI。
2. 同时上传该提示词指定的参考图片。仅提供电脑路径并不能让普通网页生图 AI 读取图片，必须实际上传附件。
3. 产品外观以 `assets/product-angle.webp`、`assets/product-front.webp` 为准；旧 MCAIPC1 图片只供版式与配色参考，不是产品参考。
4. 先生成第 01 屏，确认视觉方向后，将它作为后续各屏的附加风格参考；后续不得把第 01 屏上的文字一并复制。
5. 每屏使用“总控提示词 + 本屏提示词 + 本屏英文文案”。本交付的独立 TXT 已合并三者，无须再手动拼接。
6. 支持自定义尺寸时使用表中制作尺寸。不支持时选择最接近的竖版比例，保留安全边距后裁切；禁止拉伸产品。大段文字不准确时，让 AI 保留对应文本区域并输出无字底图，再按本文件的逐字文案排版。
7. 图片中文字必须逐项校对；第 09 屏规格表建议用可编辑文字排版覆盖到 AI 背景上。生图模型不擅长完整规格表，不能把出现过文字的图直接当作已校对成稿。

本方案是主板系列配置宣传，不是某个固定 CPU/内存/SSD SKU 的实测报告。文案已按此写完整，不含等待填写的 CPU 占位符。商品报价和后台属性仍需对应实际订单配置。

## 2. 产品事实与允许使用的卖点

依据原册第 1 页参数、第 2 页 H04-BQ 兼容信息，以及当前官网 `lib/ai-catalog.ts`、`lib/brochure-products.ts`。原册 SHA-256：`0483c61c63c7bf5ea0208f296bc2f17d057135816ce144ec3fc89fca1cdd8d34`。本次只核对该册，不代表完成全库变更扫描。

| 项目 | 本方案允许写入的内容 | 表达边界 |
| --- | --- | --- |
| 产品 | MCAIPC2 | 不写 MCAIPC1、MG01、H13 |
| 机箱/平台 | H04-BQ / AXB35-02 | 只在末屏标明，不占据前几屏标题 |
| CPU 平台 | AMD Ryzen AI Max 300 Series；AMD FP11 Strix Halo | 无具体 CPU 尾号，不写 395、16 核、32 线程、5.1GHz、140W |
| 图形 | AMD Integrated Graphics | 原册未给该平台具体 GPU/NPU 型号，不写 Radeon 8060S、NPU TOPS 或显卡等效性能 |
| 内存 | Up to 128GB LPDDR5；8000 MT/s | 不写 128GB 标配、128GB 显存、LPDDR5X 8533；不画可插拔台式内存条 |
| SSD | 2 × M.2 2280 PCIe 4.0 x4 slots | 不写 4 插槽、SSD 标配容量、最大总容量、实测速率 |
| 网口 | 1 × 2.5GbE RJ45 | 不写双网口、10GbE |
| 显示连接 | HDMI 2.1、DisplayPort 1.4、2 × USB4 | 不写 DP 2.1、4K/8K 四屏同时输出；未确认显示组合和刷新率 |
| 前置 USB | 2 × USB 3.2 Gen 2 Type-A；1 × USB4 | 按原图保留位置与形态 |
| 后置 USB | 1 × USB 3.2 Gen 2 Type-A；2 × USB 2.0；1 × USB4 | 没有可信背面参考图，不生成“真实背面布局” |
| 音频/卡槽 | Front and rear audio combo jacks；SD 4.0 | 前面板照片中的圆形可选功能键不自行标成标配指纹 |
| 无线 | M.2 2230 PCIe/USB module；2.4/5GHz；Bluetooth 5.0 or later | 模块配置需确认，仅末屏按选项表达；不写 Wi-Fi 7、BT5.4 标配 |
| 系统 | Windows 11 support | 不暗示正版许可证/系统预装包含在报价内 |
| 尺寸 | 203 × 192 × 70 mm | 原册未定义长宽高轴向，作为一组尺寸展示，不擅自给三个方向标箭头 |
| 电源 | 20V / 12A，240W external adapter | 240W 是适配器额定值，不是 CPU 功耗、整机恒定功耗或性能释放 |
| 可选项 | Fingerprint optional | 不作为标配卖点，本版不宣传 |
| 散热 | 无充分结构资料 | 不画真实爆炸图、风扇数量、热管数量、液冷或进出风方向；不承诺静音 |

### 硬件如何转换为用户利益

- CPU：开发工具、日常创作和多任务工作流程。没有整机实测，不做倍数对比。
- 集成图形：图像、3D 视口、视频项目和游戏体验；软件兼容性与表现随配置变化。
- 大内存：为兼容本地 AI 模型和多任务留出容量。不能仅凭容量保证某个模型规模、上下文长度、速度。
- 双 SSD：为系统、模型文件和创作素材规划独立存储空间。不是保证装好两条 SSD。
- 2.5GbE：连接兼容的局域网/NAS、访问共享素材；不等于互联网速度提升 2.5 倍。
- 多种显示接口：连接工作显示器和 USB4 外设；不由端口数量推导四屏同步。
- 紧凑机身：减小桌面占用，保留桌面摆放的视觉价值。

## 3. 素材及参考角色

| 文件 | 用途 | 禁止用途 |
| --- | --- | --- |
| `assets/product-angle.webp` | H04-BQ 正侧三分之四视角；所有产品主体首选 | 不把机身绕到未见过的背面 |
| `assets/product-front.webp` | H04-BQ 正面；接口屏 | 不改变孔位、卡槽、按钮和 USB 数量 |
| `assets/style-full-page.jpg` | 用户旧 MCAIPC1 完整长图：节奏、黑橙色、字体层次 | 不复制机器、参数、型号和 Logo |
| `assets/style-hero.jpg` | 原首屏产品与图标矩阵布局 | 不抄 MG01、395、4×M.2 等文案 |
| `assets/style-application.jpg` | 四用途结合机器的画面组织 | 不抄 120+ FPS、四屏8K 等结论 |
| `assets/style-memory.jpg` | 内存/存储科技示意的质感 | 不画成原来的四条 SSD，不把 RAM 写作 Storage |

原产品图为 1200×1200。前面板照片与角度图存在光线明暗差异，允许统一亮度和白平衡；不得据此改成另一种机箱颜色。机身为银灰色、弧形密集冲孔前面板、纵向 I/O、平整侧板和铜色可见装饰区域。只保留参考图可见的原有标识，不新增认证、品牌贴纸或改写成其他型号。页面品牌文字使用 `MAGIC CHIP`，不要求 AI 凭空画 Logo。

## 4. 画布、视觉和排版规范

| 屏 | 文件名 | 最终尺寸 | 2 倍制作尺寸 | 主题 |
| --- | --- | --- | --- | --- |
| 01 | 01-hero | 750×1200 | 1500×2400 | 产品形象＋六项优势 |
| 02 | 02-processor | 750×850 | 1500×1700 | Ryzen AI Max 300 平台 |
| 03 | 03-graphics | 750×900 | 1500×1800 | 集成图形与创作/游戏 |
| 04 | 04-memory-storage | 750×1050 | 1500×2100 | 128GB＋双 M.2 |
| 05 | 05-ai-workflows | 750×1250 | 1500×2500 | 本地 AI 与四用途 |
| 06 | 06-compact-design | 750×850 | 1500×1700 | 机身设计与尺寸 |
| 07 | 07-connectivity | 750×850 | 1500×1700 | 2.5GbE＋显示/外设 |
| 08 | 08-ports | 750×1150 | 1500×2300 | 前面板＋后置接口清单 |
| 09 | 09-specifications | 750×1450 | 1500×2900 | 完整参数 |

整套最终合计 750×9550px。尺寸为本项目设计建议，不是平台上传硬性规范。实际上传以卖家后台限制为准；长图以独立分屏交付更便于修改。

- 背景：近黑 `#080A0D`；次级面板 `#15191F`；橙色 `#FF8A00`；文字白 `#F5F7FA`；次级文字 `#C7CDD4`。
- 外观：摄影级产品、干净金属质感、局部橙色轮廓光。外部背景光不能变成机器自带 RGB 灯。
- 每屏一个主标题，必要时一行说明，不加眉题、重复全大写小标题。避免“ULTIMATE / UNLIMITED / BEAST”堆叠。
- 750px 成稿左右安全边距 44px，上下至少 44px；标题 44–56px，正文 28–32px，规格表 26–28px，简短注释至少 22px。2 倍源稿全部同比放大。
- 图形屏大图占画面约 55%–70%，信息密集屏可以更低。正文每段不超过三行。
- 使用清晰无衬线字体，例如 Inter / Arial。主标题可略收窄，但不用难读的科幻字体。
- 第 01、05 屏视觉强，第 08、09 屏视觉静；不要每屏重复发光台座。
- 上下边缘保持黑色，背景图案在边缘渐隐；单屏独立成立，也能无白缝拼接。
- 输出 PNG 母版；上传副本可转高质量 sRGB JPEG。文件大小以后台要求压缩，不承诺通用上限。

## 5. 总控提示词

以下总控指令适用于每一屏，独立 TXT 已自动包含。

```text
Create ONE finished English ecommerce product-detail panel for MAGIC CHIP MCAIPC2. The confirmed product is the H04-BQ enclosure with AXB35-02 motherboard series. Follow the supplied panel brief and render ONLY the supplied on-image copy. Do not create a full multi-panel page in one image.

Treat product-angle.webp and product-front.webp as the authoritative product identity references. Preserve the exact silver-gray enclosure silhouette, curved perforated front, vertical ports, side-panel design, copper-colored visible detail and original visible markings. Composite or faithfully reproduce the supplied viewing angle. Never mirror the product, invent a rear view, alter port counts, or borrow the enclosure from the old MCAIPC1 style reference. Do not add illuminated parts to the enclosure.

The old MCAIPC1 images are STYLE REFERENCES ONLY. Use their black-and-orange premium hardware advertising language, controlled orange lighting, metallic highlights and strong information hierarchy. Do not copy any old product, product name, CPU number, technical claim or benchmark. Use a near-black background, white main text and orange key numbers. Keep the result polished, readable and product-focused rather than crowded with effects.

Use English text only, with accurate spelling. No decorative eyebrow headings, no factory, OEM/ODM, inquiry, QR code, contact details, fake certification or extra marketing claims. Use the exact copy provided; do not expand it. Keep text inside safe margins. Typography must remain readable when reduced to 750px width. If exact long text cannot be rendered, preserve the layout and provide a clean background for later typography instead of inventing words.

Confirmed facts: AMD Ryzen AI Max 300 Series; AMD integrated graphics; up to 128GB LPDDR5 at 8000 MT/s; two M.2 2280 PCIe 4.0 x4 slots; one 2.5GbE RJ45; HDMI 2.1; DisplayPort 1.4; two USB4 ports total; 203 x 192 x 70 mm; 240W external adapter. These are configurable series specifications, not claims that a fixed amount of RAM or SSD is included.

Never add Ryzen 395, Radeon 8060S, CPU core counts, clock speed, TDP, NPU TOPS, 128GB dedicated VRAM, four SSD slots, 10GbE, DP2.1, Wi-Fi7, Bluetooth5.4, OCuLink, MCIO, 80Gbps USB4, liquid cooling, fan counts, cooling airflow paths, FPS, measured speedups, silent-operation claims, model-size guarantees, simultaneous four-screen claims or 8K claims. Do not show RAM as removable DIMMs. Do not add benchmark charts.

Scenes and software interfaces are conceptual illustrations, not benchmark evidence. Show original generic application screens, not fake benchmark results or unsupported software compatibility logos. Hardware diagrams must be clearly conceptual and must not claim to reveal the actual internal motherboard layout. Render only the current panel, at the requested aspect ratio.
```

## 6. 逐屏设计与可直接复制的提示词

### 01 产品形象与六项优势

目标：第一眼认出产品，第二眼读到六项差异。附件：`product-angle.webp`、`style-hero.jpg`。前 12% 为品牌/型号，12%–58% 为产品，58%–95% 为六项图标矩阵。不要缩小产品来容纳长段落。

<!-- PANEL:01-hero -->
```text
PANEL 01 — HERO. Canvas: 1500 x 2400px, final display 750 x 1200px.
Place the MAGIC CHIP wordmark and MCAIPC2 model at the top, followed by the short title. A large faithful H04-BQ product image occupies the upper-middle area, standing upright at the same three-quarter angle as product-angle.webp. Use a restrained dark metallic platform and orange rim lighting. At the bottom, create six clean feature cells in a two-column, three-row arrangement, with thin orange line icons. Keep the background dark and quiet behind the text. Match style-hero.jpg in hierarchy, not in enclosure or claims. Use only the exact text below.
```

**英文上图文案：**

```text
MAGIC CHIP
MCAIPC2
Compact Power for AI and Creation

AMD Ryzen AI Max 300 Series
Up to 128GB LPDDR5
Dual M.2 PCIe 4.0 x4
2.5GbE LAN
Dual USB4
203 x 192 x 70 mm
```
<!-- END PANEL -->

### 02 处理器平台

目标：体现硬件底座，不靠未确认的 CPU 尾号来充数。附件：产品角度图；已生成的第 01 屏作色彩参考。芯片图仅是抽象平台示意，不模仿真实封装和官方商标图形。主标题上部 25%，芯片主体中部 45%，三个工作标签下部 25%。

<!-- PANEL:02-processor -->
```text
PANEL 02 — PROCESSOR. Canvas: 1500 x 1700px, final display 750 x 850px.
Use a large conceptual processor tile on a dark circuit-inspired surface, with subtle orange energy traces. The processor tile should say AMD Ryzen AI Max 300 Series in simple typography, not a recreated official logo. Keep the H04-BQ as a small faithful product anchor at the lower right. Include three minimal workflow symbols for code development, creative work and multitasking, with their exact short labels. Do not add core counts, GHz, TOPS or TDP. Do not show performance comparison bars. Layout: title and short sentence at top, conceptual processor in the middle, three workflow labels at bottom. The chip is an illustrative platform motif, not a technical drawing.
```

**英文上图文案：**

```text
AMD Ryzen AI Max 300 Series
An AMD platform for development, creative work and everyday multitasking.

Development
Creative Work
Multitasking
```
<!-- END PANEL -->

### 03 集成图形：创作与娱乐

目标：替代旧版 GPU/NPU 双芯片屏。在当前资料下不写具体 GPU 和 NPU 性能。附件：产品角度图。上半 55% 为大型原创 3D 创作视口，下面 30% 为视频编辑与游戏两项画面，产品只做小面积锚点。应用画面是用途示意，不是软件支持或流畅度证明。

<!-- PANEL:03-graphics -->
```text
PANEL 03 — INTEGRATED GRAPHICS. Canvas: 1500 x 1800px, final display 750 x 900px.
Create a visual-led hardware advertising panel about AMD integrated graphics. Use a large original 3D design scene with an abstract metallic object and a generic viewport interface. Below it, include two simpler visual windows: a generic video timeline and an original stylized game environment. Do not use identifiable commercial game artwork, software logos, FPS counters or fake results. Place a small accurate H04-BQ product at the junction of the scenes. Make the title and AMD Integrated Graphics label clearly readable. This is a usage illustration, not a promise of specific application acceleration. Do not depict a discrete graphics card or two separate processor packages.
```

**英文上图文案：**

```text
Create. Edit. Play.
AMD Integrated Graphics

3D Workspaces
Video Projects
Gaming

Software support and performance vary by configuration.
```
<!-- END PANEL -->

### 04 内存与存储

目标：一屏两个大卖点，RAM 和 SSD 层次分清。附件：`style-memory.jpg` 只参考效果。上半为 128GB/8000，背景是抽象板载内存芯片；下半为两个 2280 长条模块。不做真实拆机图，不声称模块已包含。

<!-- PANEL:04-memory-storage -->
```text
PANEL 04 — MEMORY AND STORAGE. Canvas: 1500 x 2100px, final display 750 x 1050px.
Divide this panel into two generous stacked zones. Upper zone: large Up to 128GB typography, LPDDR5 and 8000 MT/s, with an abstract flat onboard-memory-chip illustration and subtle layers representing AI models and active projects. Do not show desktop memory sticks. Lower zone: exactly TWO conceptual M.2 2280 SSD modules with orange edge lighting, labeled with the supplied storage copy. Keep RAM visually distinct from SSD storage. These are conceptual component illustrations, not an exact motherboard layout. Do not add capacity labels to SSDs, comparative speed bars, boot time claims, SATA, or a third/fourth drive. Borrow the dramatic hardware texture of style-memory.jpg without borrowing its facts.
```

**英文上图文案：**

```text
Memory for AI. Storage for Your Projects.

Up to 128GB
LPDDR5 | 8000 MT/s
Room for compatible local AI workloads and multitasking.

2 x M.2 2280
PCIe 4.0 x4 SSD Slots
Plan storage for your system, models and creative files.

Memory and SSD capacities depend on the selected configuration.
```
<!-- END PANEL -->

### 05 场景融合：本地 AI 与生产力

目标：承接前面三个硬件屏，复用用户喜欢的四用途构图。附件：产品角度图、`style-application.jpg`。顶部 15% 标题，15%–49% 大产品，49%–93% 两行两列用途卡片。不要把四块屏幕挤到角落，更不要用连接线暗示四屏同步能力。

<!-- PANEL:05-ai-workflows -->
```text
PANEL 05 — AI AND CREATIVE WORKFLOWS. Canvas: 1500 x 2500px, final display 750 x 1250px.
Create a strong application panel inspired by style-application.jpg. Place the accurate H04-BQ product prominently below the main title. Arrange four large, readable conceptual workflow cards in a two-by-two grid below the product: local AI chat with documents, code editor with AI assistance, 3D scene creation, and an original game environment. Use orange graphic paths to visually unify the cards, but do not draw four physical display cables connected to the PC. Each card has exactly the supplied heading and one short line. The screens are conceptual examples, not demonstrated benchmarks. No model names, parameter counts, FPS, tokens/sec, specific software logos or claims that all functions run on the NPU. Keep the product and each workflow legible at mobile width.
```

**英文上图文案：**

```text
Run AI. Build Apps. Create. Play.

Local AI
Explore compatible models on your own PC.

AI-Assisted Coding
Bring local AI tools into your development workflow.

3D Creation
Move from ideas to visual projects.

Gaming
Make space for entertainment after work.

Illustrative workflows. Compatible software and configuration required.
```
<!-- END PANEL -->

### 06 紧凑机身

目标：使用真实机身优势代替未经证实的散热。附件：产品角度图和正面图。顶部 20% 标题，中部 55% 桌面上的产品，下部 20% 尺寸/供电。实际尺寸为一组文字，不给未定义轴向加尺寸线。

<!-- PANEL:06-compact-design -->
```text
PANEL 06 — COMPACT ENCLOSURE. Canvas: 1500 x 1700px, final display 750 x 850px.
Show the faithful upright H04-BQ on a clean dark desk, with part of a keyboard and a monitor stand for context. Preserve the supplied product perspective; do not invent the rear. Use soft silver reflections and a small amount of orange ambient light. The product is the main subject. Add a close-up inset of the actual perforated front surface from the reference, not an invented internal structure. Place the full dimension string as one prominent line below the product, followed by the adapter specification. Do not assign dimensions to unverified axes, draw cooling airflow, expose fans or heat pipes, show liquid cooling, or imply passive/silent cooling. Do not invent an adapter photograph.
```

**英文上图文案：**

```text
Compact by Design.
A compact enclosure for your desktop workspace.

203 x 192 x 70 mm
240W External Adapter
20V / 12A
```
<!-- END PANEL -->

### 07 连接工作空间

目标：让网络和显示接口有用途，下一屏再讲详细数量。附件：产品角度图。约 50% 画面为产品/通用 NAS/显示器，剩余为一个网络大数字和三个接口标签。连接线从布局节点延伸，不从看不见的机身背面编造插口。

<!-- PANEL:07-connectivity -->
```text
PANEL 07 — CONNECTIVITY. Canvas: 1500 x 1700px, final display 750 x 850px.
Use a dark desktop composition with the faithful H04-BQ product, a generic network storage device and one monitor showing a creative project. Use abstract orange connection paths rather than fabricated rear ports. Make 2.5GbE LAN the main numeric emphasis. At the bottom show three equal, clean interface-icon cells for HDMI 2.1, DisplayPort 1.4 and Dual USB4. Avoid showing four simultaneous monitors or implying the network speed is an internet speed guarantee. Do not add Wi-Fi generation, Bluetooth version, 10GbE, display refresh rates, 8K, or USB4 transfer-rate numbers. Keep all peripheral hardware generic and secondary to the product.
```

**英文上图文案：**

```text
Connect Your Workspace.

2.5GbE LAN
Connect to compatible networks and shared project storage.

HDMI 2.1
DisplayPort 1.4
Dual USB4

Connections for your displays and external devices.
```
<!-- END PANEL -->

### 08 接口清楚展示

目标：缺少背面照片仍可完整制作。附件：`product-front.webp`。顶部约 10% 标题，中部 47% 正面图＋清晰标签，底部约 38% 后置接口清单。后置清单的图标只是符号，不能排成貌似真实的后面板。

正面引线仅标识可见且册子支持的电源键、SD 卡槽、USB4、两个 Type-A、音频孔；第二个圆形按钮不标成标配指纹。引线无法准确对齐时采用图旁列表，不能让引线指错接口。

<!-- PANEL:08-ports -->
```text
PANEL 08 — PORT GUIDE. Canvas: 1500 x 2300px, final display 750 x 1150px.
This is a precise port-information panel. Use product-front.webp unchanged in silhouette and port layout in the upper-middle section, large enough to identify the real ports. Put the Front section alongside it using clean aligned labels. Use leader lines only when they accurately point to the visible power button, SD slot, USB4 port, two Type-A ports and audio jack. Leave the other round button unlabelled. If a line would be uncertain, use the text list without leader lines.
In the lower section, show the Rear Connections content as a tidy icon-and-text list in one or two columns. THERE IS NO REAR PRODUCT PHOTO: do not generate a rear panel or arrange icons to look like an actual physical port layout. Keep enough space for every line. Use a plain dark background, thin orange dividers and readable white text. Do not add ports beyond the supplied list.
```

**英文上图文案：**

```text
Every Connection, Clearly Shown.

Front
Power Button
SD Card Slot
1 x USB4
2 x USB 3.2 Gen 2 Type-A
Audio Combo Jack

Rear Connections
1 x USB4
1 x USB 3.2 Gen 2 Type-A
2 x USB 2.0
1 x 2.5GbE RJ45
HDMI 2.1
DisplayPort 1.4
Audio Combo Jack
DC Power Input

Rear connections are listed; physical layout is not illustrated.
```
<!-- END PANEL -->

### 09 完整参数

目标：全部参数闭环，无联系方式和额外销售内容。附件：产品角度图，可作为右上角小图。标题 8%、小产品/型号 12%、规格表约 70%、说明 10%。优先用文本工具排表，生成式背景仅占小面积。

<!-- PANEL:09-specifications -->
```text
PANEL 09 — SPECIFICATIONS. Canvas: 1500 x 2900px, final display 750 x 1450px.
Design a calm, highly legible closing specification panel. Put Specifications at top and a small faithful H04-BQ product image in the upper right. Use the exact two-column table text below, with a narrow label column and a wider value column. Use subtle alternating dark row backgrounds, thin orange rules and white text. Wrap long values without shrinking the text below the required mobile reading size. Preserve every number and interface name exactly. No extra facts, illustrations of the motherboard, certifications, pricing, contacts or calls to action. If the model cannot typeset the table accurately, deliver the same layout with the table area left clean for manual typesetting rather than generating incorrect specifications.
```

**英文上图文案（竖线表示两列边界，不必印出竖线）：**

```text
Specifications

Model | MCAIPC2
Chassis / Board | H04-BQ / AXB35-02
Processor Platform | AMD Ryzen AI Max 300 Series
Graphics | AMD Integrated Graphics
Memory | Up to 128GB LPDDR5, 8000 MT/s
Storage Slots | 2 x M.2 2280 PCIe 4.0 x4
Ethernet | 1 x 2.5GbE RJ45
Display Connections | HDMI 2.1, DisplayPort 1.4, 2 x USB4
Front USB | 2 x USB 3.2 Gen 2 Type-A, 1 x USB4
Rear USB | 1 x USB 3.2 Gen 2 Type-A, 2 x USB 2.0, 1 x USB4
Audio | Front and rear combo jacks
Card Reader | SD 4.0
Wireless Option | M.2 2230 PCIe/USB module; 2.4/5GHz; Bluetooth 5.0 or later, module-dependent
OS Support | Windows 11
Power | 20V / 12A, 240W external adapter
Dimensions | 203 x 192 x 70 mm

CPU model, installed memory, SSD capacity, wireless module and OS licensing depend on the ordered configuration.
```
<!-- END PANEL -->

## 7. 缺失资料已在本版中解决，不阻塞生图

| 缺失或未明确的资料 | 本版采用的完整替代方案 | 以后补齐后可升级 |
| --- | --- | --- |
| 精确 CPU 尾号和 GPU/NPU 参数 | CPU 用系列名，图形只写 AMD Integrated Graphics；第 03 屏改为图形用途展示 | 改具体 CPU/GPU 并加入已验证数字 |
| 散热内部结构 | 第 06 屏用真实外观、尺寸和电源规格 | 有真实内部图再做散热屏 |
| 后面板图片 | 第 08 屏用前面板实图＋后置清单 | 获得该平台/机箱的背面实拍再画引线 |
| 多屏组合、游戏/AI 实测 | 不承诺输出组合、帧率、模型规模和速度 | 按实际测试条件制作有条件说明的性能图 |
| 无线模块型号/预装情况 | 无线仅在末屏作为选项，不抢占卖点屏 | 模块确定后增加具体 Wi-Fi/蓝牙规格 |

本版不需要先填上述资料才能制作。不要让 AI 自动补全这些“缺口”，也不要从 MCAIPC1 图中挪用参数。

## 8. 验收清单

- [ ] 九屏全部使用同一 H04-BQ；没有 H13、MCAIPC1、蜂窝大孔机箱或另一种前面板。
- [ ] 全英文，无中文上图、无乱码、无擅自新增的小标题。
- [ ] 全程使用 Ryzen AI Max 300 Series，没有被 AI 改成 Ryzen AI 300 或 Ryzen AI Max+ 395。
- [ ] 128GB 前有 Up to；8000 单位为 MT/s；存储是两条 M.2，不是四条。
- [ ] 网络只有 1×2.5GbE，显示为 HDMI2.1/DP1.4，USB4 共两个，前后各一。
- [ ] 没有具体 NPU/GPU 数字、游戏帧率、对比柱状图、模型规模保证。
- [ ] 图形芯片、SSD 和软件场景都是示意，没有宣称真实内部布局或实测结果。
- [ ] 没有虚构背面照片、风扇/热管或散热流向；尺寸轴向没有被擅自解释。
- [ ] 240W 只指外置适配器；无线、系统授权和已装容量没有被暗示标配。
- [ ] 750px 与手机约 375px 宽预览都能读清正文；长表必要时增加高度或拆分，不能一味缩字。
- [ ] 各屏颜色、金属外观和光照一致；端口图未镜像，连接线未遮挡接口。
- [ ] 输出 9 张独立图片和可编辑排版文件；可另拼接一张总览，不能只交一张压缩长图。

## 9. 来源与项目边界

- 产品原册：`D:\本地资源库\电脑相关\电脑册子归档\ver2\AIPC\MCAIPC2 brochure.pdf`，本次查看两页文字与页面渲染。
- 网站素材目录：`public/assets/products/ai/brochure/mcaipc2`。
- 设计参考：`D:\Desktop\NVG 临时文件\NVG项目2 六月\6.22 MCAIPC1\详情页.jpg` 与 `MCAIPC1\A+`。
- 用户已确认 H04-BQ＋AXB35-02；本方案不再混列三个主板系列和 14 种外壳。
- 本交付仅为设计文档、逐屏提示词和参考素材包，没有生成广告成图，没有修改原册或网站，没有发布。
