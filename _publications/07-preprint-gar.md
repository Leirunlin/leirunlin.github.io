---
title: "Scalable and Accurate Graph Reasoning with LLM-based Multi-Agents"
collection: publications
permalink: /publications/GAR
excerpt: "Scalable and Accurate Graph Reasoning with LLM-based Multi-Agents"
date: "2024-10-07"
venue: "NeurIPS"
year: 2024
code: 
paperurl: "https://arxiv.org/pdf/2410.09824"
authorlist: "Jiarui Ji, Runlin Lei, Jialing Bi, Zhewei Wei, Yankai Lin, Xuchen Pan, Yaliang Li, Bolin Ding"
status: 'preprint'
---
**Abstract:**

Graph generation is a fundamental task that has been extensively studied in social, technological, and scientific analysis. For modeling the dynamic graph evolution process, traditional rule-based methods struggle to capture community structures within graphs, while deep learning methods only focus on fitting training graphs. This limits existing graph generators to producing graphs that adhere to predefined rules or closely resemble training datasets, achieving poor performance in dynamic graph generation. Given that graphs are abstract representations arising from pairwise interactions in human activities, a realistic simulation of human-wise interaction could provide deeper insights into the graph evolution mechanism. With the increasing recognition of large language models (LLMs) in simulating human behavior, we introduce GraphAgent-Generator (GAG), a novel simulation-based framework for dynamic graph generation. Without training or fine-tuning process of LLM, our framework effectively replicates seven macro-level structural characteristics in established network science theories while surpassing existing baselines in graph expansion tasks by 31\% on specific evaluation metrics. Through node classification task, we validate GAG effectively preserves characteristics of real-world network for node-wise textual features in generated text-rich graph. Furthermore, by incorporating parallel acceleration, GAG supports generating graphs with up to nearly 100,000 nodes or 10 million edges through large-scale LLM-based agent simulation, with a minimum speed-up of 90.4\%. The source code is available at this https URL.