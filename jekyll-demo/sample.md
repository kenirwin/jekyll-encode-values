---
permalink: '/sample.html'
---

{% assign use64 = true %}
{% for item in site.data.quiz-encoded %}

- {{ item.question | decode64: use64 }}
  {% endfor %}
