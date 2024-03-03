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

Welcome to My Homepage.
I'm Runlin Lei (雷润林), a second-year Ph.D. student at Renmin University of China, advised by Prof. [Zhewei Wei](http://www.weizhewei.com). 
Before my Ph.D. journey, I obtained my Bachelor's degree from Shanghai University of Finance and Economics, advised by Prof. Hongsong Yuan.

I like sleeping and 🐷. Both are good.
This is my GitHub homepage. Feel free to explore and learn more about me and my projects.

### Contact information
Email: runlin_lei@ruc.edu.cn. 

WeChat: wjccc77777

## Research interests

My interest lies in machine learning on graphs. 
Now I am working on spectral graph neural networks, graph learning on heterophilic graphs, and graph adversarial attack & defense.

## Publications

<ul>{% for post in site.publications reversed %}
{% include archive-single-cv.html %}
{% endfor %}</ul>

## Talks

<ul>{% for post in site.talks reversed %}
{% include archive-single-talk.html %}
{% endfor %}</ul>

