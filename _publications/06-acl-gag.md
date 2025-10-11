---
title: "LLM-Based Multi-Agent Systems are Scalable Graph Generative Models"
collection: publications
permalink: /publications/GAG
excerpt: "LLM-Based Multi-Agent Systems are Scalable Graph Generative Models"
date: "2024-10-28"
venue: "ACL (Findings)"
year: 2024
code: "https://github.com/Ji-Cather/GraphAgent"
paperurl: "https://arxiv.org/abs/2410.09824"
authorlist: "Jiarui Ji, Runlin Lei, Jialing Bi, Zhewei Wei, Yankai Lin, Xuchen Pan, Yaliang Li, Bolin Ding"
status: 'pub'
---
**Abstract:**
The structural properties of naturally arising social graphs are extensively studied to understand their evolution. Prior approaches for modeling network dynamics typically rely on rule-based models, which lack realism and generalizability, or deep learning-based models, which require large-scale training datasets. Social graphs, as abstract graph representations
of entity-wise interactions, present an opportunity to explore network evolution mechanisms through realistic simulations of human-item interactions. Leveraging the pre-trained social consensus knowledge embedded in large language models (LLMs), we present GraphAgentGenerator (GAG), a novel simulation-based framework for dynamic, text-attributed social
graph generation. GAG simulates the temporal node and edge generation processes for zeroshot social graph generation. The resulting graphs exhibit adherence to seven key macroscopic network properties, achieving an 11% improvement in microscopic graph structure metrics. Through the node classification benchmarking task, we validate GAG effectively captures the intricate text-structure correlations in graph generation. Furthermore, GAG supports generating graphs with up to nearly 100,000 nodes or 10 million edges through large-scale LLM-based agent simulation with parallel acceleration, achieving a minimum speed-up of 90.4%. The source code is available at https://github.com/Ji-Cather/GraphAgent.