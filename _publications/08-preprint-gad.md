---
title: "Exploring the Potential of Large Language Models as Predictors in Dynamic Text-Attributed Graphs"
collection: publications
permalink: /publications/GAD
excerpt: "Exploring the Potential of Large Language Models as Predictors in Dynamic Text-Attributed Graphs"
date: "2025-3-5"
venue: "preprint"
year: 2025
code: 
paperurl: "https://arxiv.org/abs/2503.03258"
authorlist: "Runlin Lei, Jiarui Ji, Haipeng Ding, Lu Yi, Zhewei Wei, Yongchao Liu, Chuntao Hong"
status: 'preprint'
---
**Abstract:**

With the rise of large language models (LLMs), there has been growing interest in Graph Foundation Models (GFMs) for graph-based tasks. By leveraging LLMs as predictors, GFMs have demonstrated impressive generalizability across various tasks and datasets. However, existing research on LLMs as predictors has predominantly focused on static graphs, leaving their potential in dynamic graph prediction unexplored. In this work, we pioneer using LLMs for predictive tasks on dynamic graphs. We identify two key challenges: the constraints imposed by context length when processing large-scale historical data and the significant variability in domain characteristics, both of which complicate the development of a unified predictor. To address these challenges, we propose the GraphAgent-Dynamic (GAD) Framework, a multi-agent system that leverages collaborative LLMs. In contrast to using a single LLM as the predictor, GAD incorporates global and local summary agents to generate domain-specific knowledge, enhancing its transferability across domains. Additionally, knowledge reflection agents enable adaptive updates to GAD's knowledge, maintaining a unified and self-consistent architecture. In experiments, GAD demonstrates performance comparable to or even exceeds that of full-supervised graph neural networks without dataset-specific training. Finally, to enhance the task-specific performance of LLM-based predictors, we discuss potential improvements, such as dataset-specific fine-tuning to LLMs. By developing tailored strategies for different tasks, we provide new insights for the future design of LLM-based predictors.