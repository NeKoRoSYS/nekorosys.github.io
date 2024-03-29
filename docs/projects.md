---
layout: default
title: "My Projects"
permalink: projects/
---
<ul>
{% for post in site.categories[Project] %}
  <li>
    {{ post.date | date: "%B %d, %Y" }}: <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
