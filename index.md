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
        I’m a software engineer at <a target="_blank" href="https://hiverlab.com/">Hiverlab</a>, where I focus on building scalable ML/CV-based solutions, web applications, and simulations.
        I did my BSc in Physics at Nagoya University, focusing on theoretical astrophysics research under <a target="_blank" href="https://sites.google.com/site/omegalabnagoya/member/takeuchi_tsutomu">Professor Tsutomu Takeuchi</a> at the <a target="_blank" href="https://sites.google.com/site/omegalabnagoya/home/">Laboratory of Galaxy Formation and Evolution (Ω Lab)</a>. My thesis on the use of unsupervised deep learning for analysing galactic images can be found <a target="_blank" href="https://github.com/dillonloh/galaxy-dim">here</a>.
      </p>
      <p>
        I will be joining the University of Cambridge’s MPhil in Machine Learning and Machine Intelligence programme in Sep 2025!
      </p>
      <p> My CV can be found <a target="_blank"  href="/static/(2025) Academic CV - Dillon.pdf">here</a>.
      <p>
        More importantly, I squat 140kg, bench 110kg, and OHP 80kg @ 74kg bw (no i don’t deadlift)
      </p>
    </div>
    <div class="head-image">
      <img id="imgClickAndChange" src="/static/profile.jpg" onclick="changeImage()"/>
    </div>
  </div>
</div>
