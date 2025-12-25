---
title: "Robustness in Text-Attributed Graph Learning: Insights, Trade-offs, and New Defenses"
collection: publications
permalink: /publications/robustness-tag
excerpt: "Robustness in Text-Attributed Graph Learning: Insights, Trade-offs, and New Defenses"
date: "2024-10-22"
venue: "Under Review"
year: 2025
code:
paperurl: "https://arxiv.org/pdf/2510.17185"
authorlist: "Runlin Lei, Lu Yi, Mingguo He, Pengyu Qiu, Zhewei Wei, Yongchao Liu, Chuntao Hong"
status: 'preprint'
category: 'Graph & LLMs'
---
**Abstract:**

While Graph Neural Networks (GNNs) and Large Language Models (LLMs) are powerful approaches for learning on Text-Attributed Graphs (TAGs), a comprehensive understanding of their robustness remains elusive. 
Current evaluations are fragmented, failing to systematically investigate the distinct effects of textual and structural perturbations across diverse models and attack scenarios.
To address these limitations, we introduce a unified and comprehensive framework to evaluate robustness in TAG learning. 
Our framework evaluates classical GNNs, robust GNNs (RGNNs), and GraphLLMs across ten datasets from four domains, under diverse text-based, structure-based, and hybrid perturbations in both poisoning and evasion scenarios. 
Our extensive analysis reveals multiple findings, among which three are particularly noteworthy: 1) models have inherent robustness trade-offs between text and structure, 2) the performance of GNNs and RGNNs depends heavily on the text encoder and attack type, and 3) GraphLLMs are particularly vulnerable to training data corruption.
To overcome the identified trade-offs, we introduce SFT-auto, a novel framework that delivers superior and balanced robustness against both textual and structural attacks within a single model. 
Our work establishes a foundation for future research on TAG security and offers practical solutions for robust TAG learning in adversarial environments.