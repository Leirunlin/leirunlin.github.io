---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# About Me
I'm Runlin Lei (雷润林), a third-year Ph.D. student at Renmin University of China, advised by Prof. [Zhewei Wei](http://www.weizhewei.com). 
My research interests primary focus on graph machine learning.

Before my Ph.D. journey, I obtained my Bachelor's degree from Shanghai University of Finance and Economics, advised by Prof. Hongsong Yuan and Prof. Hua Liu.

# Publications

<ul>{% for post in site.publications reversed %}
{% include archive-single-cv.html %}
{% endfor %}</ul>


# Talks

- 2023-10: Give talk about *Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks* to Complex Networks Analysis discussion group. \[[Talk](https://www.iit.demokritos.gr/complex-networks-analysis-think-tank/)\]

- 2022-10: Give talk about *Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks* to AITIMES. \[[Talk](https://www.bilibili.com/video/BV1xt4y1T74f/)\]


# Services

I serve(d) as a program committee member / reviewer for:
* 2025: ICLR, AAAI
* 2024: NeurIPS, ICML, ICLR, KDD, ACML
* 2023: NeurIPS, ICML
