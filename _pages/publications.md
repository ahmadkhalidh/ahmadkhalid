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


<!-- # -----------------------------------------------------------------------------
# Site settings
# -----------------------------------------------------------------------------

title: blank # the website title (if blank, full name will be used instead)
first_name: Khalid
middle_name: 
last_name: Ahmad
contact_note: >
  You can even add a little note about which of these is the best way to reach you.
description: > # the ">" symbol means to ignore newlines until "footer_text:"
  A simple, whitespace theme for academics. Based on [*folio](https://github.com/bogoli/-folio) design.
footer_text: >
  Powered by <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> with <a href="https://github.com/alshedivat/al-folio">al-folio</a> theme.
  Hosted by <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>.
  Photos from <a href="https://unsplash.com" target="_blank">Unsplash</a>.
keywords: jekyll, jekyll-theme, academic-website, portfolio-website # add your own keywords or leave empty
lang: en # the language of your site (for example: en, fr, cn, ru, etc.)
icon:  # the emoji used as the favicon (alternatively, provide image name in /assets/img/)

url: https://ahmadkhalidh.github.io/ahmadkhalid # the base hostname & protocol for your site
baseurl: /ahmadkhalid # the subpath of your site, e.g. /blog/. Leave blank for root
last_updated: false # set to true if you want to display last updated in the footer
impressum_path: # set to path to include impressum link in the footer, use the same path as permalink in a page, helps to conform with EU GDPR
back_to_top: true # set to false to disable the back to top button -->
