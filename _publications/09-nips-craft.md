---
title: "Future Link Prediction Without Memory or Aggregation"
collection: publications
permalink: /publications/Craft
excerpt: "Future Link Prediction Without Memory or Aggregation"
date: "2025-5-26"
venue: "NeurIPS"
year: 2025
code:
paperurl: "https://arxiv.org/abs/2505.19408"
authorlist: "Lu Yi, Runlin Lei, Fengran Mo, Yanping Zheng, Zhewei Wei, Yuhang Ye"
status: 'pub'
category: 'General Graph Learning'
---
**Abstract:**

Future link prediction on temporal graphs is a fundamental task with wide applicability in real-world dynamic systems.These scenarios often involve both recurring (seen) and novel (unseen) interactions, requiring models to generalize effectively across both types of edges. However, existing methods typically rely on complex memory and aggregation modules, yet struggle to handle unseen edges. In this paper, we revisit the architecture of existing temporal graph models and identify two essential but overlooked modeling requirements for future link prediction: representing nodes with unique identifiers and performing target-aware matching between source and destination nodes. To this end, we propose Cross-Attention based Future Link Predictor on Temporal Graphs (CRAFT), a simple yet effective architecture that discards memory and aggregation modules and instead builds on two components: learnable node embeddings and cross-attention between the destination and the source's recent interactions. This design provides strong expressive power and enables target-aware modeling of the compatibility between candidate destinations and the source's interaction patterns. Extensive experiments on diverse datasets demonstrate that CRAFT consistently achieves superior performance with high efficiency, making it well-suited for large-scale real-world applications.