---
layout: layout.njk
title: Resumes
---

<div class="center-container">
  <div class="resume-content">
    <div class="title-text-container">
      <h1>Resumes:</h1>
    </div>

    <div class="resume-category">
      <ul>
        {%- for cv in cvs %}
          <li>
            <p>{{ cv[0] | capitalize }}: <a href="{{ cv[1].href }}" target="_blank">Download</a></p>
          </li>
        {%- endfor %}
      </ul>
    </div>
  </div>
</div>
