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

# <span style="color:#2E86C1;">About Me</span>

<div style="border-left: 4px solid #2E86C1; padding-left: 10px; margin-bottom: 20px;">
  I'm **Runlin Lei (雷润林)**, a third-year Ph.D. student at **Renmin University of China**, advised by [Prof. Zhewei Wei](http://www.weizhewei.com).  
  My research interests primarily focus on **graph machine learning**, **trustworthy graph neural networks**, and **graph foundation models**.
  
  Before my Ph.D. journey, I obtained my Bachelor's degree from **Shanghai University of Finance and Economics**, advised by **Prof. Hongsong Yuan** and **Prof. Hua Liu**.
</div>

# <span style="color:#2E86C1;">Publications</span>

<ul style="list-style-type: none; padding: 0;">
  {% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}
</ul>

# <span style="color:#2E86C1;">Talks</span>

<ul style="list-style-type: disc; padding-left: 20px;">
  <li><span style="color:#2980B9;">2023-10:</span> Gave a talk about *Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks* to Complex Networks Analysis discussion group. [Talk](https://www.iit.demokritos.gr/complex-networks-analysis-think-tank/)</li>
  <li><span style="color:#2980B9;">2022-10:</span> Gave a talk about *Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks* to AITIMES. [Talk](https://www.bilibili.com/video/BV1xt4y1T74f/)</li>
</ul>

# <span style="color:#2E86C1;">Services</span>

<div style="border-left: 4px solid #2E86C1; padding-left: 10px; margin-bottom: 20px;">
  I serve(d) as a program committee member / reviewer for:
  <ul style="list-style-type: square; padding-left: 20px;">
    <li><strong>2025:</strong> ICLR, AAAI, TPAMI</li>
    <li><strong>2024:</strong> NeurIPS, ICML, ICLR, KDD, ACML</li>
    <li><strong>2023:</strong> NeurIPS, ICML</li>
  </ul>
</div>

# <span style="color:#2E86C1;">Honors/Scholarships</span>

<div style="border-left: 4px solid #2E86C1; padding-left: 10px; margin-bottom: 20px;">
  <ul style="list-style-type: disc; padding-left: 20px;">
    <li><strong>2022:</strong>
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li>Shanghai Excellent Graduate</li>
        <li>School Excellent Graduate</li>
      </ul>
    </li>
    <li><strong>2021:</strong>
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li>China Merchants Bank Scholarship</li>
        <li>American Undergraduate Mathematical Modeling Competition M Award</li>
        <li>National Mathematical Modeling Competition National Second Prize</li>
      </ul>
    </li>
    <li><strong>2020:</strong>
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li>People's Scholarship First Prize</li>
      </ul>
    </li>
    <li><strong>2019:</strong>
      <ul style="list-style-type: circle; padding-left: 20px;">
        <li>National Scholarship</li>
      </ul>
    </li>
  </ul>
</div>

# <span style="color:#2E86C1;">Visitor Opportunities</span>

<div style="border-left: 4px solid #2E86C1; padding-left: 10px; margin-bottom: 20px;">
  I am actively seeking visitor opportunities to collaborate with leading researchers and institutions in the field of graph machine learning. I am eager to engage in joint projects, exchange ideas, and contribute to innovative research initiatives. If you are interested in hosting a visiting researcher or exploring potential collaborations, please feel free to [contact me](runlin_lei@ruc.edu.cn).
</div>