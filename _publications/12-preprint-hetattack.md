---
title: "Restricted Black-Box Attacks on Graphs Beyond Homophily"
collection: publications
permalink: /publications/hetattack
excerpt: "Restricted Black-Box Attacks on Graphs Beyond Homophily"
date: "2025-1-10"
venue: "TKDE"
year: 2025
code:
paperurl:
authorlist: "Runlin Lei, et al."
status: 'pub'
category: 'Trustworthy Graph Learning'
---
**Abstract:**

Graph Neural Networks (GNNs) have become widely popular across various applications, with their vulnerability to adversarial attacks being a key concern. 
Among the different types of graph attacks, Restricted Black-box Attacks (RBAs) present the most strict constraints, as attackers have limited access only to node features and graph structure. 
Existing RBAs rely on homophily assumptions or shift-based losses as their objectives to conduct structural perturbations, but we demonstrate that all the approaches fail on heterophilic graphs. 
To address this challenge, we introduce node-wise distance metrics as the objective to fundamentally quantify the quality of the graph structure after perturbations.
Our theoretical results show that the proposed objective allows RBAs to effectively handle graphs beyond homophily.
Leveraging this objective, we propose HetAttack, a scalable method that significantly reduces the distinguishability of nodes on the victim graph. 
Experiments on both synthetic and real-world graphs confirm the efficacy of HetAttack across varying levels of homophily, achieving performance comparable to split-unknown white-box attacks without prior knowledge of labels or the target model.