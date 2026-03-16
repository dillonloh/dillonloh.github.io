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
      {%- for item in news %}
        <li class="news-list-item">
          <div class="news-list-item-date">
            <span>{{ item.date }}</span>
          </div>
          <div class="news-list-item-content">
            <span>{{ item.content }}</span>
            {%- if item.image_urls and item.image_urls.length %}
              <div class="spotlight-gallery" data-gallery>
                <div class="spotlight-main">
                  <img
                    src="{{ item.image_urls[0] }}"
                    alt="News image 1"
                    class="spotlight-main-image"
                    data-main-image
                  />
                </div>
                {%- if item.image_urls.length > 1 %}
                  <div class="spotlight-thumbnails">
                    {%- for image_url in item.image_urls %}
                      <button
                        type="button"
                        class="spotlight-thumb {% if loop.first %}active{% endif %}"
                        data-thumb
                        data-full="{{ image_url }}"
                        data-alt="News image {{ loop.index }}"
                        aria-label="Show image {{ loop.index }}"
                      >
                        <img
                          src="{{ image_url }}"
                          alt="Thumbnail {{ loop.index }}"
                          class="spotlight-thumb-image"
                        />
                      </button>
                    {%- endfor %}
                  </div>
                {%- endif %}
              </div>
            {%- endif %}
          </div>
        </li>
      {%- endfor %}
    </ul>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const galleries = document.querySelectorAll("[data-gallery]");

    galleries.forEach((gallery) => {
      const mainImage = gallery.querySelector("[data-main-image]");
      const thumbs = gallery.querySelectorAll("[data-thumb]");

      thumbs.forEach((thumb) => {
        thumb.addEventListener("click", () => {
          const fullImageUrl = thumb.dataset.full;
          const altText = thumb.dataset.alt || "";

          mainImage.src = fullImageUrl;
          mainImage.alt = altText;

          thumbs.forEach((t) => t.classList.remove("active"));
          thumb.classList.add("active");
        });
      });
    });
  });
</script>