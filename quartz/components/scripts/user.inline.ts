document.addEventListener("nav", () => {
  // Create the overlay framework if it isn't already on the page
  let overlay = document.querySelector(".lightbox-overlay") as 
HTMLDivElement;
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    document.body.appendChild(overlay);
    
    // Close when clicking anywhere on the white background space
    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
      overlay.innerHTML = "";
    });
  }

  // Target all images and process videos
  const mediaElements = document.querySelectorAll("img, video");
  
  mediaElements.forEach((media) => {
    // Skip video backgrounds or tiny structural icons
    if (media.classList.contains("icon") || 
media.closest(".lightbox-overlay")) return;

    media.addEventListener("click", (e) => {
      e.stopPropagation();
      overlay.innerHTML = ""; // Flush previous data
      
      const clone = media.cloneNode(true) as HTMLElement;
      clone.removeAttribute("style");
      
      // If it's a video, ensure full player controls pop up on display
      if (clone.tagName === "VIDEO") {
        (clone as HTMLVideoElement).controls = true;
        (clone as HTMLVideoElement).muted = false;
        (clone as HTMLVideoElement).play();
      }

      overlay.appendChild(clone);
      overlay.classList.add("active");
    });
  });
});

