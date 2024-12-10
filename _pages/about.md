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

# <span class="section-title">About Me</span>

<div class="section-content about-me">
  <p>
    I'm <strong>Runlin Lei (雷润林)</strong>, a third-year Ph.D. student at <strong>Renmin University of China</strong>, advised by <a href="http://www.weizhewei.com" class="link">Prof. Zhewei Wei</a>.  
    My research interests primarily focus on <strong>graph machine learning</strong>, <strong>trustworthy graph neural networks</strong>, and <strong>graph foundation models</strong>.
  </p>
  
  <p>
    Before my Ph.D. journey, I obtained my Bachelor's degree from <strong>Shanghai University of Finance and Economics</strong>, advised by <strong>Prof. Hongsong Yuan</strong> and <strong>Prof. Hua Liu</strong>.
  </p>
  
  <p>
    Feel free to reach out to me via email: 
    <a href="mailto:runlin_lei@ruc.edu.cn" class="link">runlin_lei@ruc.edu.cn</a>.
  </p>
</div>

# <span class="section-title">Visitor Opportunities</span>

<div class="section-content visitor-opportunities">
  <p class="highlight">
    🚀 I am actively seeking visitor opportunities to collaborate with leading researchers and institutions in the field of graph machine learning. I am eager to engage in joint projects, exchange ideas, and contribute to innovative research initiatives.
  </p>
  <p>
    If you are interested in hosting a visiting researcher or exploring potential collaborations, please feel free to <a href="mailto:runlin_lei@ruc.edu.cn" class="link bold">contact me</a>.
  </p>
</div>

# <span class="section-title">Publications</span>

<ul class="publications-list">
  {% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}
</ul>

# <span class="section-title">Talks</span>

<ul class="talks-list">
  <li><span class="date">2023-10:</span> Gave a talk about <em>Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks</em> to the Complex Networks Analysis discussion group. [Talk](https://www.iit.demokritos.gr/complex-networks-analysis-think-tank/)</li>
  <li><span class="date">2022-10:</span> Gave a talk about <em>Evennet: Ignoring odd-hop neighbors improves robustness of graph neural networks</em> to AITIMES. [Talk](https://www.bilibili.com/video/BV1xt4y1T74f/)</li>
</ul>

# <span class="section-title">Honors & Scholarships</span>

<div class="section-content honors-scholarships">
  <ul class="honors-list">
    <li><strong>2024, 2023:</strong> Academic Excellence Scholarship, Academic Scholarship</li>
    <li><strong>2022:</strong> <span class="highlight">Shanghai Excellent Graduate</span>, School Excellent Graduate</li>
    <li><strong>2021:</strong> China Merchants Bank Scholarship, American Undergraduate Mathematical Modeling Competition M Award, National Mathematical Modeling Competition National Second Prize</li>
    <li><strong>2020:</strong> People's Scholarship First Prize</li>
    <li><strong>2019:</strong> <span class="highlight">National Scholarship</span></li>
  </ul>
</div>

# <span class="section-title">Services</span>

<div class="section-content services">
  <p>I serve(d) as a program committee member / reviewer for:</p>
  <ul class="services-list">
    <li><strong>2025:</strong> ICLR, AAAI, TPAMI</li>
    <li><strong>2024:</strong> NeurIPS, ICML, ICLR, KDD, ACML</li>
    <li><strong>2023:</strong> NeurIPS, ICML</li>
  </ul>
</div>
