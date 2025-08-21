---
layout: page
title: Mental Health Classifier
description: The Mental Health Classifier was developed to apply natural language processing for detecting and categorizing mental health conditions from online text, supporting early identification and analysis across multiple categories
img: assets/img/word_cloud.png
importance: 1
category: undergrad
related_publications: true
---

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/word_cloud.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    word cloud of mental health
</div>

The motivation for this project was the challenge of identifying and categorizing different mental health conditions from large volumes of online text. Traditional systems often focus on binary classification, such as detecting the presence or absence of a single condition, which limits their usefulness. To overcome this, the project applied natural language processing techniques to classify user posts into multiple mental health categories, including anxiety, depression, PTSD, and others. The approach involved preprocessing Reddit data, extracting features with transformer embeddings, and training both traditional machine learning models and deep learning pipelines for classification. This setup allowed for more nuanced detection of mental health issues, enabling better insights into online discussions and offering potential support tools for early identification and intervention.

