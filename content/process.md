---
title: process
aliases:
  - process
---

<!-- BULLETPROOF SIDE-BY-SIDE GRID (SQUARES PERFECTLY ALIGNED) -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin: 40px 0 15px 0;">
  
  <!-- LEFT SIDE: SQUARE VIDEO (HOVER TO PLAY, NO ZOOM, NO SOUND) -->
  <div style="border-radius: 6px; overflow: hidden; margin: 0; padding: 0; line-height: 0;">
    <video 
      src="tek2.MOV" 
      muted 
      loop 
      playsinline
      style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; cursor: pointer; margin: 0;" 
      onmouseover="this.play();" 
      onmouseout="this.pause();"
      onclick="this.paused ? this.play() : this.pause();">
    </video>
  </div>

  <!-- RIGHT SIDE: SQUARE IMAGE (SMOOTH HOVER ZOOM) -->
  <div style="border-radius: 6px; overflow: hidden; margin: 0; padding: 0; line-height: 0;">
    <img 
      src="tek.jpeg" 
      style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; margin: 0;" 
      onmouseover="this.style.transform='scale(1)';" 
      onmouseout="this.style.transform='scale(1)';" 
    />
  </div>

</div>

<!-- SHARED LIGHT-GRAY CAPTION -->
<p style="color: #a0a0a0; font-size: 0.85em; text-align: center; margin-bottom: 40px; letter-spacing: 0.03em;">
Tekanna-experiment
</p>


<div class="portfolio-rectangle-row">
  <div><img src="mambarn.jpg" /></div>
  <div><img src="mambarn2.jpg" /></div>
</div>

<p style="text-align: center; color: #a0a0a0; font-size: 0.85em; margin-top: 20px; letter-spacing: 0.03em;">
Skulpturskisser
</p>

<!-- BULLETPROOF SIDE-BY-SIDE GRID (SQUARES PERFECTLY ALIGNED) -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin: 40px 0 15px 0;">
  
  <!-- LEFT SIDE: SQUARE VIDEO (HOVER TO PLAY, NO ZOOM, NO SOUND) -->
 <div style="border-radius: 6px; overflow: hidden; margin: 0; padding: 0; line-height: 0;">
    <img 
      src="stranden2.jpg" 
      style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; transition: transform 0.4s ease; margin: 0;" 
    />
  </div>

  <!-- RIGHT SIDE: SQUARE IMAGE (SMOOTH HOVER ZOOM) -->
  <div style="border-radius: 6px; overflow: hidden; margin: 0; padding: 0; line-height: 0;">
    <img 
      src="stranden.jpg" 
      style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; display: block; transition: transform 0.4s ease; margin: 0;" 
    />
  </div>

</div>

<!-- SHARED LIGHT-GRAY CAPTION -->
<p style="color: #a0a0a0; font-size: 0.85em; text-align: center; margin-bottom: 40px; letter-spacing: 0.03em;">
Att teckna med lera
</p>
