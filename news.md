---
layout: layout.njk
title: News
---

<div class="center-container">
  <div class="title-text-container">
    <h1>News:</h1>
  </div>
  <div class="news-content">
    <ul class="news-list">
      {% for item in news %}
        <li class="news-list-item">
          <div class="news-list-item-date">
            <span>{{ item.date }}</span> 
          </div>
          <div class="news-list-item-content">
            <span>{{ item.content }}</span>
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>
