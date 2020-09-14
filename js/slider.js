const slider1 = document.getElementById("glide1");

new Glide(slider1, {
  type: "carousel",
  startAt: 0,
  perview: 1,
  animationDuration: 800,
  animationTimingFunc: "linear",
}).mount();
