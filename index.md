---
layout: layout.njk
title: Home
---

<script>
  function changeImage() {
    const img = document.getElementById("imgClickAndChange");
    const currentSrc = img.src;
    const filename = currentSrc.substring(currentSrc.lastIndexOf('/') + 1);

    if (filename === "profile.jpg") {
      alert("SURPRISE!")
      img.src = "/static/surprise.png";
    } else {
      img.src = "/static/profile.jpg";
    }
  }
</script>

<div class="center-container">
  <div class="center-inner-container">
    <div class="intro-text">
      <h1>Hi, I'm Dillon Loh</h1>
      <p>
        I’m a software engineer at Hiverlab, where I focus on building scalable ML/CV-based solutions and robotic simulations.
        I did my BSc at Nagoya University and majored in Physics, focusing on theoretical astrophysics research.
        I will be joining the University of Cambridge’s MPhil in Machine Learning and Machine Intelligence programme in Sep 2025!
      </p>
      <p> My CV can be found <a href="/static/(2025) Academic CV - Dillon.pdf">here</a>.
      <p>
        More importantly, I squat 140kg, bench 110kg, and OHP 80kg @ 74kg bw (no i don’t deadlift)
      </p>
    </div>
    <div class="head-image">
      <img id="imgClickAndChange" src="/static/profile.jpg" onclick="changeImage()"/>
    </div>
  </div>
</div>
