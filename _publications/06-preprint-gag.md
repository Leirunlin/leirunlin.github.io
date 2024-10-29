---
title: "Dynamic and Textual Graph Generation Via Large-Scale LLM-based Agent Simulation"
collection: publications
permalink: /publications/GAG
excerpt: "Dynamic and Textual Graph Generation Via Large-Scale LLM-based Agent Simulation"
date: "2024-10-28"
venue: "Preprint"
year: 2024
code: ""
paperurl: "https://arxiv.org/abs/2410.05130"
authorlist: "Yuwei Hu, Runlin Lei, Xinyi Huang, Zhewei Wei, Yongchao Liu"
status: 'preprint'
---
**Abstract:**

Graph Neural Networks (GNNs) excel across various applications but remain vulnerable to adversarial attacks, particularly Graph Injection Attacks (GIAs), which inject malicious nodes into the original graph and pose realistic threats. Text-attributed graphs (TAGs), where nodes are associated with textual features, are crucial due to their prevalence in real-world applications and are commonly used to evaluate these vulnerabilities. However, existing research only focuses on embedding-level GIAs, which inject node embeddings rather than actual textual content, limiting their applicability and simplifying detection. In this paper, we pioneer the exploration of GIAs at the text level, presenting three novel attack designs that inject textual content into the graph. Through theoretical and empirical analysis, we demonstrate that text interpretability, a factor previously overlooked at the embedding level, plays a crucial role in attack strength. Among the designs we investigate, the Word-frequency-based Text-level GIA (WTGIA) is particularly notable for its balance between performance and interpretability. Despite the success of WTGIA, we discover that defenders can easily enhance their defenses with customized text embedding methods or large language model (LLM)--based predictors. These insights underscore the necessity for further research into the potential and practical significance of text-level GIAs.