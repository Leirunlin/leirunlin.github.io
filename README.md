# Runlin Lei · Research

个人研究主页。使用 Python 3 标准库从本地数据生成静态 HTML，英文使用随站提供的 Source Serif 4（新闻、标题和长文）与 Geist（导航、日期和控件），中文使用系统字体，照片随站点提供。

## 本地构建与预览

在仓库根目录运行

```sh
python3 scripts/build.py
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

打开 [本地首页](http://127.0.0.1:8000/) 或 [论文索引](http://127.0.0.1:8000/publications/)。修改内容后再次运行构建命令并刷新浏览器。用 Ctrl-C 关闭预览。

## 内容与设计

首页的四篇代表作选取一作或论文注明的共一作品，按近期优先排列。AdaCoM 原文首页说明 Lu Yi 与 Runlin Lei 为共同第一作者。每篇配图来自对应论文的 Figure 1，保存在 `images/teasers/`。每篇论文在首页代表作、完整书目和详情页展示对应的研究关键词。简介和学术活动沿用原主页公开内容，经历列出机构、时间和身份。完整书目按发表年份排序。所有论文在关闭 JavaScript 时仍可阅读。

- 在 `data/publications.json` 中维护题目、作者顺序、会议或期刊、发表年份、主题和链接。预印本使用 arXiv 年份，正式发表后改为出版物年份和正式链接。保留 slug 可维持原有论文网址。在 `keywords` 中列出与论文直接相关的研究主题，例如 GEO、LLM、Recommendation。
- 在 `data/abstracts.json` 中按 slug 维护摘要。首页代表作在 `scripts/build.py` 中的 `FEATURED`。
- 在 `site/home.html` 中更新个人简介、经历与学术活动。共享布局在 `site/layout.html`，排版在 `site/style.css`。
- 构建产物位于 `dist/`。GitHub Pages 使用本仓库的 Pages workflow 时，在 Settings → Pages 选择 **GitHub Actions**。之后推送至 master 即可触发同一构建。

## LLM Agent 研究者的个人站参考

首屏的第一人称介绍、中英文姓名和个人照片参考了 [John Yang](https://john-b-yang.github.io/)、[Xingyao Wang](https://xwang.dev/) 和 [Jing Yu Koh](https://jykoh.com/)。代表作的组织参考了 [Zora Wang](https://zorazrw.github.io/)、[Xuhui Zhou](https://xuhuiz.com/) 和 [Shunyu Yao](https://ysymyth.github.io/) 如何把研究兴趣连到具体工作。也对照了 [Ofir Press](https://ofir.io/about/)、[Noah Shinn](https://noahshinn.com/)、[Shuyan Zhou](https://www.shuyanzhou.com/)、[Tao Yu](https://taoyds.github.io/) 和 [Carlos E. Jimenez](https://closji.com/) 的个人站。

首页的研究问题聚焦 agent harness 如何帮助智能体跨会话完成长程任务、从经验中改进策略，以及让人更容易理解和引导智能体的工作。Talks 每场单列日期与链接。

## 产品页设计参考

参考 [Cursor](https://cursor.com/) 在首屏放置交互演示、[Linear AI](https://linear.app/ai) 按具体场景拆分功能，以及 [Thinking Machines Lab](https://thinkingmachines.ai/) 用简短介绍进入研究主题的方式。

图游戏有三种玩法。Least energy 需要收集两颗晶体并以最低能量抵达终点；One stroke 要按相连的边走完全图，每条边只能经过一次。Beacons 要用最少的信标点亮所有边，点击节点可以放置或取回信标。**Replay moves** 回放每一步操作，**Retry** 重试同一张图，**New graph** 生成节点数、位置与连线不同的新一局。在本页切换玩法会保留各自的进度。

代表作图文并排的编排参考 [Jon Barron](https://jonbarron.info/)。News 采用日期加单条事件的倒序列表，参考 [Jing Yu Koh](https://jykoh.com/)。

配色与字号参考 [Anthropic](https://www.anthropic.com/)、[Cursor](https://cursor.com/)、[Mistral](https://mistral.ai/) 的中性色底与强调色，以及 [Jing Yu Koh](https://jykoh.com/) 的衬线正文和独立日期列。本站参考 [UniPat](https://unipat.ai/) 的流动图案，采用靛蓝动态首屏、白色棋盘和浅银蓝阅读区。
