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

# <span class="section-title" style="color: #34495E;">About Me</span>

<div class="section-content about-me" style="border-left-color: #34495E;">
  <p>
    👋 I'm Runlin Lei (雷润林), a fourth-year Ph.D. student at Renmin University of China. I'm a member of the ALGO Lab, advised by <a href="https://weizhewei.com/" class="link" style="color: #2980B9;">Prof. Zhewei Wei</a>.  
    My research interests primarily focus on graph machine learning, trustworthy graph neural networks and graph foundation models (graph large languge models).
  </p>
  
  <p>
    🎓 Before embarking on my Ph.D. journey, I earned my Bachelor's degree from Shanghai University of Finance and Economics, where I was advised by Prof. Hongsong Yuan and Prof. Hua Liu.
  </p>
  
  <p>
    📧 Feel free to reach out to me via email: 
    <a href="mailto:runlin_lei@ruc.edu.cn" class="link" style="color: #2980B9;">runlin_lei@ruc.edu.cn</a>.
  </p>
</div>

# <span class="section-title" style="color: #34495E;">Publications</span>

<ul class="publications-list">
  {% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}
</ul>

# <span class="section-title" style="color: #34495E;">Talks</span>

<ul class="talks-list" style="color: #2C3E50;">
  <li>
    <span class="date" style="color: #2980B9;">2023-10:</span> 
    Gave a talk about <em>Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks</em> to the Complex Networks Analysis discussion group. 
    <a href="https://www.iit.demokritos.gr/complex-networks-analysis-think-tank/" class="link" style="color: #2980B9;">Talk Link</a>
  </li>
  <li>
    <span class="date" style="color: #2980B9;">2022-10:</span> 
    Gave a talk about <em>Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks</em> to AITIMES. 
    <a href="https://www.bilibili.com/video/BV1xt4y1T74f/" class="link" style="color: #2980B9;">Talk Link</a>
  </li>
</ul>

# <span class="section-title" style="color: #34495E;">Honors & Scholarships</span>

<div class="section-content honors-scholarships" style="border-left-color: #34495E;">
  <ul class="honors-list" style="color: #2C3E50;">
    <li><strong style="color: #16A085;">2024, 2023:</strong> Academic Excellence Scholarship, Academic Scholarship</li>
    <li><strong style="color: #16A085;">2022:</strong> <span class="highlight" style="color: #16A085;">Shanghai Excellent Graduate</span>, School Excellent Graduate</li>
    <li><strong style="color: #16A085;">2021:</strong> China Merchants Bank Scholarship, American Undergraduate Mathematical Modeling Competition M Award, National Mathematical Modeling Competition National Second Prize</li>
    <li><strong style="color: #16A085;">2020:</strong> People's Scholarship First Prize</li>
    <li><strong style="color: #16A085;">2019:</strong> <span class="highlight" style="color: #16A085;">National Scholarship</span></li>
  </ul>
</div>

# <span class="section-title" style="color: #34495E;">Services</span>

<div class="section-content services" style="border-left-color: #34495E;">
  <p style="color: #2C3E50;">I serve(d) as a program committee member / reviewer for:</p>
  <ul class="services-list" style="color: #2C3E50;">
    <li><strong style="color: #16A085;">2025:</strong> ICLR, AAAI, TPAMI</li>
    <li><strong style="color: #16A085;">2024:</strong> NeurIPS, ICML, ICLR, KDD, ACML</li>
    <li><strong style="color: #16A085;">2023:</strong> NeurIPS, ICML</li>
  </ul>
</div>
