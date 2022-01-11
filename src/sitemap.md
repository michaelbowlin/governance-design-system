---
title: "Sitemap"
layout: "base.njk"
---

## Sitemap of Pages

<ul>
{%- for post in collections.posts -%}
<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
