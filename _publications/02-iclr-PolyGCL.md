---
title: "PolyGCL: Graph Contrastive Learning via Learnable Spectral Polynomial Filters"
collection: publications
permalink: /publications/PolyGCL
excerpt: "PolyGCL: Graph Contrastive Learning via Learnable Spectral Polynomial Filters"
date: "2024-1-16"
venue: "ICLR"
year: 2024
code: ""
paperurl: 
authorlist: "Jingyu Chen, **Runlin Lei**, Zhewei Wei"
status: 'pub'
---
**Abstract:**

Recently, Graph Contrastive Learning (GCL) has achieved significantly superior performance in self-supervised graph representation learning. However, the existing GCL technique has inherent smooth characteristics because of its low-pass GNN encoder and objective based on homophily assumption, which poses a challenge when applied to heterophilic graphs. In supervised learning tasks, spectral GNNs with polynomial approximation excel in both homophilic and heterophilic settings by adaptively fitting graph filters of arbitrary shapes. Yet, their applications in unsupervised learning are rarely explored. Based on the above analysis, a natural question arises: *Can we incorporate the excellent properties of spectral polynomial filters into graph contrastive learning?* In this paper, we address the question by studying the necessity of introducing high-pass information for heterophily from a spectral perspective. We propose POLYGCL, a GCL pipeline that utilizes polynomial filters to achieve contrastive learning between the low-pass and high- pass views. Specifically, POLYGCL utilizes polynomials with learnable filters to generate different spectral views and an objective that incorporates high-pass information through a linear combination. We theoretically prove that POLYGCL outperforms previous GCL paradigms when applied to graphs with varying levels of homophily. We conduct extensive experiments on both synthetic and real-world datasets, which demonstrate the promising performance of POLYGCL on homophilic and heterophilic graphs.