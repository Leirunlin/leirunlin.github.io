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
    👋 I'm Runlin Lei (雷润林), a Ph.D. candidate at Renmin University of China (graduating June 2027), a member of the ALGO Lab, advised by <a href="https://weizhewei.com/" class="link" style="color: #2980B9;">Prof. Zhewei Wei</a>.
    My research interests primarily focus on Multi-Agent Systems, LLM Applications, and Graph Machine Learning. <strong>I am on the job market!</strong>
  </p>
  
  <p>
    🎓 I earned my Bachelor's degree from Shanghai University of Finance and Economics, where I was advised by Prof. Hongsong Yuan and Prof. Hua Liu.
  </p>
  
  <p>
    📧 Feel free to reach out to me via email: 
    <a href="mailto:runlin_lei@ruc.edu.cn" class="link" style="color: #2980B9;">runlin_lei@ruc.edu.cn</a>.
  </p>
</div>

# <span class="section-title" style="color: #34495E;">Industry Experience</span>

<div class="section-content" style="border-left-color: #34495E;">
  <ul style="color: #2C3E50;">
    <li>
      <strong style="color: #16A085;">2026.2 -- Present:</strong> <strong>Tongyi Lab, Alibaba</strong> — Intern, <a href="https://github.com/agentscope-ai/CoPaw" class="link" style="color: #2980B9;">CoPaw</a>
    </li>
    <li>
      <strong style="color: #16A085;">2024.10 -- 2026.1:</strong> <strong>Ant Group</strong> — Research Intern, LLM for Graph
      <br>Published work on robust LLMs on graphs (ICLR 2026) and LLM-based dynamic graph prediction.
    </li>
  </ul>
</div>

# <span class="section-title" style="color: #34495E;">Publications</span>

## <span style="color: #2980B9;">Graph & LLMs</span>
<ul class="publications-list">
  {% for post in site.publications reversed %}
    {% if post.category == 'Graph & LLMs' %}
      {% include archive-single-cv.html %}
    {% endif %}
  {% endfor %}
</ul>

## <span style="color: #2980B9;">Trustworthy Graph Learning</span>
<ul class="publications-list">
  {% for post in site.publications reversed %}
    {% if post.category == 'Trustworthy Graph Learning' %}
      {% include archive-single-cv.html %}
    {% endif %}
  {% endfor %}
</ul>

## <span style="color: #2980B9;">General Graph Learning</span>
<ul class="publications-list">
  {% for post in site.publications reversed %}
    {% if post.category == 'General Graph Learning' %}
      {% include archive-single-cv.html %}
    {% endif %}
  {% endfor %}
</ul>

## <span style="color: #2980B9;">Others</span>
<ul class="publications-list">
  {% for post in site.publications reversed %}
    {% if post.category == 'Others' %}
      {% include archive-single-cv.html %}
    {% endif %}
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
    <li><strong style="color: #16A085;">2025:</strong> KDD 2025 Outstanding Reviewer &amp; Session Chair</li>
    <li><strong style="color: #16A085;">2025, 2024, 2023:</strong> Academic Excellence Scholarship, Academic Scholarship</li>
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
    <li><strong style="color: #16A085;">2026:</strong> ICLR, KDD, ICML</li>
    <li><strong style="color: #16A085;">2025:</strong> ICLR, AAAI, KDD, TPAMI</li>
    <li><strong style="color: #16A085;">2024:</strong> NeurIPS, ICML, ICLR, KDD, ACML</li>
    <li><strong style="color: #16A085;">2023:</strong> NeurIPS, ICML</li>
  </ul>
</div>

# <span class="section-title" style="color: #34495E;">Visitors</span>

<div style="text-align: center;">
  <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=ri1s0wMHMnloafsLp0Vwxf0MmW6yRaWisoXVyIGbe0U"></script>
</div>
