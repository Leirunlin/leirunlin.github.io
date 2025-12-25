---
title: "Beyond Over-smoothing: Uncovering the Trainability Challenges in Deep Graph Neural Networks"
collection: publications
permalink: /publications/BeyondOver
excerpt: "Beyond Over-smoothing: Uncovering the Trainability Challenges in Deep Graph Neural Networks"
date: "2024-10-21"
venue: "CIKM"
year: 2024
code:
paperurl: https://arxiv.org/pdf/2408.03669
authorlist: "Jie Peng, Runlin Lei, Zhewei Wei"
status: 'pub'
category: 'General Graph Learning'
---
**Abstract:**

The drastic performance degradation of Graph Neural Networks (GNNs) as the depth of the graph propagation layers exceeds 8-10 is widely attributed to a phenomenon of Over-smoothing. Although recent research suggests that Over-smoothing may not be the dominant reason for such a performance degradation, they have not provided rigorous analysis from a theoretical view, which warrants further investigation. In this paper, we systematically analyze the real dominant problem in deep GNNs and identify the issues that these GNNs towards addressing Over-smoothing essentially work on via empirical experiments and theoretical gradient analysis. We theoretically prove that the difficult training problem of deep MLPs is actually the main challenge, and various existing methods that supposedly tackle Over-smoothing actually improve the trainability of MLPs, which is the main reason for their performance gains. Our further investigation into trainability issues reveals that properly constrained smaller upper bounds of gradient flow notably enhance the trainability of GNNs. Experimental results on diverse datasets demonstrate consistency between our theoretical findings and empirical evidence. Our analysis provides new insights in constructing deep graph models.