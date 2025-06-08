// async function Context() {
//   window.addEventListener("contextmenu", (e) => {
//     console.log("Inspect Buton Blocked");
//     e.preventDefault();
//   });
// }
// Context();

const grid = document.getElementById("responsiveGrid");
const adjustBtn = document.getElementById("adjustBtn");
const highlightBtn = document.getElementById("highlightBtn");
const resetBtn = document.getElementById("resetBtn");
const cards = document.querySelectorAll(".card");

// Viewport Tracking
let currentViewport = getViewport();

function getViewport() {
  return window.innerWidth < 480
    ? "mobile"
    : window.innerWidth < 768
    ? "tablet"
    : "desktop";
}

// Dynamic Column Adjustment
function adjustColumns() {
  const viewport = getViewport();

  if (viewport !== currentViewport) {
    currentViewport = viewport;
    console.log(`Viewport changed to: ${viewport}`);

    // Example: Change grid gap based on viewport
    if (viewport === "mobile") {
      grid.style.gap = "10px";
    } else if (viewport === "tablet") {
      grid.style.gap = "15px";
    } else {
      grid.style.gap = "20px";
    }
  }
}

// Event Listeners
adjustBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.toggle("js-adjusted");
  });

  // Dynamically change min column width
  const currentMinWidth =
    getComputedStyle(grid).gridTemplateColumns.split(" ")[0];

  const newMinWidth = currentMinWidth === "250px" ? "300px" : "250px";
  grid.style.gridTemplateColumns = `repeat(auto-fit, minmax(${newMinWidth}, 1fr))`;
});

highlightBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.toggle("js-highlight");
  });
});

resetBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("js-adjusted", "js-highlight");
  });
  grid.style.gridTemplateColumns = "";
  grid.style.gap = "";
});

// Window Resize Observer
window.addEventListener("resize", () => {
  adjustColumns();

  // Example: Change card image height dynamically
  const newHeight =
    window.innerWidth < 480
      ? "120px"
      : window.innerWidth < 768
      ? "150px"
      : "180px";

  document.querySelectorAll(".card-img").forEach((img) => {
    img.style.height = newHeight;
  });
});

// Intersection Observer for lazy loading/animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

// Initialize card animations
cards.forEach((card, index) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  card.style.transition = `all 0.5s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Initial call
adjustColumns();
