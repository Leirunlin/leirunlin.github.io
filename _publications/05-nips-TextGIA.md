---
title: "Intruding with Words: Towards Understanding Graph Injection Attacks at the Text Level"
collection: publications
permalink: /publications/TextGIA
excerpt: "Intruding with Words: Towards Understanding Graph Injection Attacks at the Text Level"
date: "2024-12-10"
venue: "NeurIPS"
year: 2024
code: "https://github.com/Leirunlin/"
paperurl: "https://arxiv.org/abs/2405.16405"
authorlist: "Runlin Lei, Yuwei Hu, Yuchen Ren, Zhewei Wei"
status: 'pub'
---
**Abstract:**

Graph Neural Networks (GNNs) excel across various applications but remain vulnerable to adversarial attacks, particularly Graph Injection Attacks (GIAs), which inject malicious nodes into the original graph and pose realistic threats. Text-attributed graphs (TAGs), where nodes are associated with textual features, are crucial due to their prevalence in real-world applications and are commonly used to evaluate these vulnerabilities. However, existing research only focuses on embedding-level GIAs, which inject node embeddings rather than actual textual content, limiting their applicability and simplifying detection. In this paper, we pioneer the exploration of GIAs at the text level, presenting three novel attack designs that inject textual content into the graph. Through theoretical and empirical analysis, we demonstrate that text interpretability, a factor previously overlooked at the embedding level, plays a crucial role in attack strength. Among the designs we investigate, the Word-frequency-based Text-level GIA (WTGIA) is particularly notable for its balance between performance and interpretability. Despite the success of WTGIA, we discover that defenders can easily enhance their defenses with customized text embedding methods or large language model (LLM)--based predictors. These insights underscore the necessity for further research into the potential and practical significance of text-level GIAs.