---
layout: layout.njk
title: Research
---

<div class="center-container">
  <div class="research-content">
    <div class="title-text-container">
      <h1>Research:</h1>
    </div>

    <div class="research-category">
      <h2>Publications</h2>
      <ul>
        {% for item in research.publications %}
          <li>
            <p>{{ item.text }}
            {% if item.url %}<a href="{{ item.url }}">{{ item.url }}</a>{% endif %}</p>
          </li>
        {% endfor %}
      </ul>
    </div>

    <div class="research-category">
      <h2>Presentations/Posters</h2>
      <ul>
        {% for item in research.presentations %}
          <li>
            <p>{{ item.text }}<br/><br/>
            {% if item.url %}{{ item.label }}: <a href="{{ item.url }}">{{ item.url }}</a>{% endif %}</p>
          </li>
        {% endfor %}
      </ul>
    </div>

    <div class="research-category">
      <h2>Textbook Contributions</h2>
      <ul>
        {% for item in research.textbooks %}
          <li>
            <p>{{ item.text }}<br/>
            {{ item.isbn }}</p>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>
