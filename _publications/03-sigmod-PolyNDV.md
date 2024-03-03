---
title: "Learning-based Property Estimation with Polynomials"
collection: publications
permalink: /publications/PolyNDV
excerpt: "Learning-based Property Estimation with Polynomials"
date: "2024-2-23"
venue: "SIGMOD"
year: 2024
code: 
paperurl: 
authorlist: "Jiajun Li, Runlin Lei, Sibo Wang, Bolin Ding, Zhewei Wei"
status: 'pub'
---
**Abstract:**

The problem of estimating data properties using sampling frequency histograms has attracted extensive interest in the area of databases.
The properties include the number of distinct values (NDV), entropy, and so on. In the field of databases, property estimation is fundamental to complex applications. For example, NDV estimation is
the foundation of query optimization, and entropy estimation is the
foundation of data compression. Among them, methods originating
from statistics exhibit desirable theoretical guarantees but rely on
specific assumptions about the distribution of data, resulting in
poor performance in real-world applications. Learning-based meth-
ods, which use information from training data, are adaptable in the
real world but often lack theoretical guarantees or explainability. In
addition, a unified framework for estimating these frequency-based
estimators with machine learning is lacking. Given the aforemen-
tioned challenges, it is natural to wonder if a unified framework
with theoretical guarantees can be established for property estimation. 
The recent literature has presented theoretical studies that
propose estimation frameworks based on polynomials. These studies also prove estimation errors with respect to the sample size.
Motivated by the above polynomial estimation framework, we
propose a learning-based estimation framework with polynomial
approximation, which aims to learn the coefficients of the polynomial, providing theoretical guarantees to the learning framework.
Through comprehensive experiments on both synthetic and real-
world datasets for estimating various data properties like NDV,
entropy, and power sum, our results show the superiority of our
algorithms over previous estimator