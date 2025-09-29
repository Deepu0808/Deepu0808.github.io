// Scroll to Top Button Functionality
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show or hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.classList.add("show-btn");
    } else {
      scrollTopBtn.classList.remove("show-btn");
    }
  });

  // Smooth scroll to top on click
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-in-section");

  function handleScrollAnimation() {
    fadeSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScrollAnimation);
  window.addEventListener("load", handleScrollAnimation);
});

// ===== Project Filter Functionality with Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });
});

