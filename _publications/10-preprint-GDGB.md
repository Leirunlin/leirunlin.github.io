---
title: "GDGB: A Benchmark for Generative Dynamic Text-Attributed Graph Learning"
collection: publications
permalink: /publications/GDGB
excerpt: "GDGB: A Benchmark for Generative Dynamic Text-Attributed Graph Learning"
date: "2025-5-26"
venue: "preprint"
year: 2025
code: "https://gdgb-algo.github.io/"
paperurl: "https://arxiv.org/abs/2505.19408"
authorlist: "Jie Peng, Jiarui Ji, Runlin Lei, Zhewei Wei, Yongchao Liu, Chuntao Hong"
status: 'preprint'
---
**Abstract:**

Dynamic Text-Attributed Graphs (DyTAGs), which intricately integrate structural,
temporal, and textual attributes, are crucial for modeling complex real-world systems. However, most of the existing DyTAG datasets exhibit poor textual quality,
which severely limits their utility for DyTAG generation tasks requiring semantically rich inputs. Additionally, prior work mainly focuses on discriminative tasks
on DyTAGs, resulting in a lack of standardized task formulations and evaluation
protocols tailored for DyTAG generation. To address these critical issues, we propose Generative DyTAG Benchmark (GDGB), which comprises eight meticulously
curated DyTAG datasets with high-quality textual features for both nodes and
edges, overcoming limitations of prior datasets. Building on GDGB, we define two
novel DyTAG generation tasks: Transductive Dynamic Graph Generation (TDGG)
and Inductive Dynamic Graph Generation (IDGG). TDGG transductively generates
a target DyTAG based on the given source and destination node sets, while the
more challenging IDGG introduces new node generation to inductively model the
dynamic expansion of real-world graph data. To enable holistic evaluation, we
design multifaceted metrics that assess the structural, temporal, and textual quality
of the generated DyTAGs. We further propose GAG-General, an LLM-based multiagent generative framework tailored for reproducible and robust benchmarking of
DyTAG generation. Experimental results demonstrate that GDGB enables rigorous
evaluation of TDGG and IDGG, with key insights revealing the critical interplay
of structural and textual features in DyTAG generation. These findings establish
GDGB as a foundational resource for advancing generative DyTAG research and
unlocking further practical applications in DyTAG generation. GDGB datasets,
source codes, and leaderboards are available at here.