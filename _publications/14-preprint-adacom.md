---
title: "Learning Agent-Compatible Context Management for Long-Horizon Tasks"
collection: publications
permalink: /publications/AdaCoM
excerpt: "Learning Agent-Compatible Context Management for Long-Horizon Tasks"
date: "2026-05-29"
venue: "preprint"
year: 2026
code:
paperurl: "https://arxiv.org/abs/2605.30785"
authorlist: "Lu Yi, Runlin Lei, Liuyi Yao, Yuexiang Xie, Yuyang Li, Wenhao Zhang, Zhewei Wei, Yaliang Li, Jian-Yun Nie"
status: 'preprint'
category: 'Graph & LLMs'
---
**Abstract:**

LLM agents increasingly face long-horizon tasks such as web search and deep research in real-world applications, where accumulated context can cause long-context degradation and reasoning failures. Prior work mitigates this through context management with agent-side context control or fixed strategies such as summarization, which require training the agent itself for adaptation and are impractical for closed-source agents. We introduce Adaptive Context Management (AdaCoM), which trains an external LLM to manage the context of a frozen agent through flexible modification actions and end-to-end reinforcement learning. Across diverse agents on web search and deep research benchmarks, AdaCoM improves performance by preserving task constraints and progress while pruning stale content. The learned strategies reveal a Fidelity-Reliability Trade-off, and transfer experiments suggest a practical path toward reusable context managers for agent systems.
