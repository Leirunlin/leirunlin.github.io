---
permalink: /
title: "About Me"
excerpt: "Runlin Lei's academic profile and research interests"
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

  Feel free to reach out to me via email: <a href="mailto:runlin_lei@ruc.edu.cn" style="color: #2980B9;">runlin_lei@ruc.edu.cn</a>.
</div>

# <span style="color:#2E86C1;">Visitor Opportunities</span>

<div style="border-left: 4px solid #F39C12; padding-left: 10px; margin-bottom: 20px;">
  <p style="font-weight: bold; color: #F39C12;">🚀 I am actively seeking visitor opportunities to collaborate with leading researchers and institutions in the field of graph machine learning. I am eager to engage in joint projects, exchange ideas, and contribute to innovative research initiatives.</p>
  <p>If you are interested in hosting a visiting researcher or exploring potential collaborations, please feel free to <a href="mailto:runlin_lei@ruc.edu.cn" style="color: #2980B9; font-weight: bold;">contact me</a>.</p>
</div>

# <span style="color:#2E86C1;">Publications</span>

<ul style="list-style-type: none; padding: 0;">
  {% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}
</ul>

# <span style="color:#2E86C1;">Talks</span>

<ul style="list-style-type: disc; padding-left: 20px;">
  <li><span style="color:#2980B9;">2023-10:</span> Gave a talk about <em>Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks</em> to the Complex Networks Analysis discussion group. [Talk](https://www.iit.demokritos.gr/complex-networks-analysis-think-tank/)</li>
  <li><span style="color:#2980B9;">2022-10:</span> Gave a talk about <em>Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks</em> to AITIMES. [Talk](https://www.bilibili.com/video/BV1xt4y1T74f/)</li>
</ul>

# <span style="color:#2E86C1;">Honors & Scholarships</span>

<div style="border-left: 4px solid #2E86C1; padding-left: 10px; margin-bottom: 20px;">
  <ul style="list-style-type: none; padding-left: 20px;">
    <li><strong>2024, 2023:</strong> Academic Excellence Scholarship, Academic Scholarship</li>
    <li><strong>2022:</strong> <strong style="color: #2E86C1;">Shanghai Excellent Graduate</strong>, School Excellent Graduate</li>
    <li><strong>2021:</strong> China Merchants Bank Scholarship, American Undergraduate Mathematical Modeling Competition M Award, National Mathematical Modeling Competition National Second Prize</li>
    <li><strong>2020:</strong> People's Scholarship First Prize</li>
    <li><strong>2019:</strong> <strong style="color: #2E86C1;">National Scholarship</strong></li>
  </ul>
</div>



# <span style="color:#2E86C1;">Services</span>

<div style="border-left: 4px solid #2E86C1; padding-left: 10px; margin-bottom: 20px;">
  I serve(d) as a program committee member / reviewer for:
  <ul style="list-style-type: square; padding-left: 20px;">
    <li><strong>2025:</strong> ICLR, AAAI, TPAMI</li>
    <li><strong>2024:</strong> NeurIPS, ICML, ICLR, KDD, ACML</li>
    <li><strong>2023:</strong> NeurIPS, ICML</li>
  </ul>
</div>

