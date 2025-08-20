---
layout: page
permalink: /publications/
title: Publications
description: Publications by categories in reverse chronological order.
nav: true
nav_order: 2
---

<!-- Search bar for filtering publications -->
{% include bib_search.liquid %}

<!-- Publications list rendered by Jekyll Scholar -->
<div class="publications">
  {% bibliography %}
</div>
