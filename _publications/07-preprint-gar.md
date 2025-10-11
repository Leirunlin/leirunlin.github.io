---
title: "Scalable and Accurate Graph Reasoning with LLM-based Multi-Agents"
collection: publications
permalink: /publications/GAR
excerpt: "Scalable and Accurate Graph Reasoning with LLM-based Multi-Agents"
date: "2024-10-07"
venue: ""
year: 2024
code: 
paperurl: "https://arxiv.org/abs/2410.05130"
authorlist: "Yuwei Hu, Runlin Lei, Xinyi Huang, Zhewei Wei, Yongchao Liu"
status: 'preprint'
---
**Abstract:**

Recent research has explored the use of Large Language Models (LLMs) for tackling complex graph reasoning tasks. However, due to the intricacies of graph structures and the inherent limitations of LLMs in handling long text, current approaches often fail to deliver satisfactory accuracy, even on small-scale graphs and simple tasks. To address these challenges, we introduce GraphAgent-Reasoner, a fine-tuning-free framework that utilizes a multi-agent collaboration strategy for explicit and precise graph reasoning. Inspired by distributed graph computation theory, our framework decomposes graph problems into smaller, node-centric tasks that are distributed among multiple agents. The agents collaborate to solve the overall problem, significantly reducing the amount of information and complexity handled by a single LLM, thus enhancing the accuracy of graph reasoning. By simply increasing the number of agents, GraphAgent-Reasoner can efficiently scale to accommodate larger graphs with over 1,000 nodes. Evaluated on the GraphInstruct dataset, our framework demonstrates near-perfect accuracy on polynomial-time graph reasoning tasks, significantly outperforming the best available models, both closed-source and fine-tuned open-source variants. Our framework also demonstrates the capability to handle real-world graph reasoning applications such as webpage importance analysis.