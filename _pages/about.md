---
layout: archive
title: "Runlin Lei's Homepage"
permalink: /
author_profile: true
redirect_from:
  - /about/
  - /about.html
  - /aboutme
  - /_pages/about
---

{% include base_path %}

## About Me

Welcome to My GitHub.io Homepage
I'm Runlin Lei (雷润林), a first-year Phd. student at Renmin University of China, advised by Prof. Zhewei Wei. 
I like sleeping. Sleeping is good.
This is my GitHub homepage. Feel free to explore and learn more about me and my projects.

### Contact information
Email: runlin_lei@ruc.edu.cn. 

## Research interests

My interest lies in machine learning on graphs. 
Now I am working on Spectral Graph Neural Networks, Graph Leraning on Heterophilic Graphs, and Graph Adversarial Attack.

*Why?*
## Publications

<ul>{% for post in site.publications reversed %}
{% include archive-single-cv.html %}
{% endfor %}</ul>
