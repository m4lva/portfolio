



<!-- STYLING RULES FOR ALL PHOTO GRIDS -->
<style>
  .trio-container {
    margin: 40px 0 15px 0;
  }
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px; /* Generous padding between your pairs */
    margin-top: 15px; /* Locked margin to perfectly match the 40px visual gap */
  }
  .top-focal-photo {
    width: 100%;
    margin-bottom: 0;
  }
  .image-wrapper {
    overflow: hidden; /* Keeps the zoom contained inside the borders */
    border-radius: 6px;
    background: transparent; /* Seamless dark/light mode blend */
  }
  .image-wrapper img {
    width: 100%;
    display: block;
    transition: transform 0.4s ease; /* Silky smooth animation speed */
  }
  
  /* FIRST ROW DIMENSIONS: Strict 6x8 canvas constraint */
  .ratio-6-8 {
    aspect-ratio: 6 / 8;
    object-fit: cover;
  }

  /* SECOND ROW DIMENSIONS: Perfect 1:1 Square canvas constraint */
  .ratio-square {
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .image-wrapper:hover img {
    transform: scale(1.00); /* Subtle, premium 4% magnification boost */
  }
  .single-caption {
    color: #a0a0a0; /* Non-distracting light gray text */
    font-size: 0.85em;
    text-align: center;
    margin-top: 20px;
    letter-spacing: 0.03em;
  }
  .section-divider {
    border: 0;
    height: 1px;
    background: currentColor;
    opacity: 0.15; /* Soft, elegant separation line */
    margin: 50px auto;
    width: 80%;
  }
</style>

<!-- ========================================== -->
<!-- SECTION ONE: THE ASYMMETRICAL TRIO         -->
<!-- ========================================== -->
<div class="trio-container">

  <!-- Bottom Pair (6x8 Dimensions) -->
  <div class="portfolio-grid">
    <div class="image-wrapper">
      <img src="vk1.webp" class="ratio-6-8" />
    </div>
    <div class="image-wrapper">
      <img src="vk3.webp" class="ratio-6-8" />
    </div>
  </div>
  
  <!-- Top Main Focal Photo (Different Dimensions) -->
  <div class="image-wrapper top-focal-photo">
    <img src="vk2.webp" />
  </div>
  
  <p class="single-caption">Tillit</p>
</div>

<!-- THIN SEPARATOR LINE -->
<hr class="section-divider" />

<!-- ========================================== -->
<!-- SECTION TWO: THE GALLERY DUO (SQUARES)     -->
<!-- ========================================== -->
<div>
  <div class="portfolio-grid" style="margin-top: 0;">
    <div class="image-wrapper">
      <img src="fat1.webp" class="ratio-square" />
    </div>
    <div class="image-wrapper">
      <img src="fat2.webp" class="ratio-square" />
    </div>
  </div>
  
  <p class="single-caption">Fotominnen</p>
</div>

<!-- THIN SEPARATOR LINE -->
<hr class="section-divider" />

 <div class="image-wrapper top-focal-photo">
    <img src="tb.webp" />
  </div>
  <p class="single-caption">Jag menade inte att såra dig</p>
</div>