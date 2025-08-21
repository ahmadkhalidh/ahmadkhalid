---
layout: page
title: HealthFin Classifier
description: The HealthFin Classifier was developed to explore how artificial intelligence can be applied in the financial aspects of healthcare, such as insurance claims, medical billing, and fraud detection.
img: assets/img/healthfin.png
importance: 1
category: undergrad
related_publications: true
---

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/healthfin.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Output of the Healthfin Classifier
</div>

The motivation behind the HealthFin Classifier was the growing volume of financial queries in healthcare, where hospitals and insurers often face delays in handling claims, billing, and insurance verification due to manual triaging. To address this, the system was built using natural language processing techniques that can automatically categorize user queries into predefined financial classes. The approach involved representing queries with transformer-based embeddings to capture semantic meaning, followed by classification pipelines that assign each query to the appropriate category. This workflow reduces response time, minimizes errors, and improves efficiency in healthcare finance operation

