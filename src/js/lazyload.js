export function lazyLoadBackground() {
    document.addEventListener("DOMContentLoaded", function () {
      const lazyBg = document.querySelector(".bg-container");
      if (lazyBg) {
        if ("IntersectionObserver" in window) {
          const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const bg = lazyBg.getAttribute("data-bg");
                lazyBg.style.backgroundImage = bg;
                lazyBg.classList.remove("lazy-bg");
                observer.unobserve(lazyBg);
              }
            });
          });
          observer.observe(lazyBg);
        } else {
          // Fallback для старих браузерів
          lazyBg.style.backgroundImage = lazyBg.getAttribute("data-bg");
          lazyBg.classList.remove("lazy-bg");
        }
      }
    });
  }
  