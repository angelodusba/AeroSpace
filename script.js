document.getElementById("cta-button").addEventListener("click", function () {
  const p1 = document.getElementById("phase1");
  const p2 = document.getElementById("phase2");
  const back = document.getElementById("back-button");

  p1.style.transition = "opacity 0.5s";
  p1.style.opacity = "0";
  setTimeout(() => {
    p1.classList.add("hidden");
    p2.classList.remove("hidden");
    p2.classList.add("fade-in");
    p2.style.transition = "opacity 0.5s";
    p2.style.opacity = "1";
    back.classList.remove("hidden"); // show back button
  }, 500);
});

document.getElementById("back-button").addEventListener("click", function () {
  const p1 = document.getElementById("phase1");
  const p2 = document.getElementById("phase2");
  const back = document.getElementById("back-button");

  p2.style.opacity = "0";
  back.classList.add("hidden"); // hide back button
  setTimeout(() => {
    p2.classList.add("hidden");
    p2.classList.remove("fade-in");
    p1.classList.remove("hidden");
    setTimeout(() => {
      p1.style.opacity = "1";
    }, 50);
  }, 500);
});
