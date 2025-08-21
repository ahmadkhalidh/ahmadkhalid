---
layout: page
title: Exploring Masked Autoencoders on Road Images
description: Undergraduate capstone.
img: assets/img/vit.jpg
importance: 1
category: undergrad
related_publications: true
---

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/vit.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The Framework of the Masked Autoencoders and Vision transformer
</div>

I worked on a project using Masked Autoencoders with Vision Transformers (MAE-ViT) to explore how self-supervised learning can improve image understanding. The idea was to mask out a large portion of the input image and train the model to reconstruct the missing parts, forcing the encoder to capture meaningful features rather than memorizing low-level details. This process allowed the model to learn strong visual representations without requiring large amounts of labeled data. After pretraining, the learned features were fine-tuned for tasks such as classification and anomaly detection, showing improved accuracy and robustness compared to conventional CNN-based methods.

