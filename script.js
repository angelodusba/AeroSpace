document.getElementById("cta-button").addEventListener("click", function () {
  const p1 = document.getElementById("phase1");
  const p2 = document.getElementById("phase2");

  // Fade out phase 1
  p1.style.transition = "opacity 0.5s";
  p1.style.opacity = "0";

  setTimeout(() => {
    p1.classList.add("hidden");
    p2.classList.remove("hidden");
    p2.classList.add("fade-in");
  }, 500);
});
