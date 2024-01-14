gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  },
});

tl1.to(
  ".hero-body img",
  {
    top: "130%",
    left: "70%",
    transform: "rotate(-25deg)",
  },
  "animation-1"
);

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "0 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.to(
  ".hero-body img",
  {
    top: "200%",
    transform: "rotate(0deg)",
    left: "35%",
    right: "33%",
    height: "984px",
    width: "436px",
  },
  "animation-2"
);

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".products",
    start: "0 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});

tl3.to(
  ".hero-body img",
  {
    top: "336%",
    left: "44%",
    right: "40%",
    height: "60%",
    width: "13%",
    zIndex: "4", // Use "ZIndex" instead of "zindex"
  },
  "animation-3"
);

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials",
    start: "0 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});

tl4.to(
  ".hero-body img",
  {
    top: "400%",
    left: "35%",
    right: "33%",
    height: "984px",
    width: "436px",
  },
  "animation-4"
);

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "0 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});

tl5.to(
  ".hero-body img",
  {
    top: "510%",
    left: "2%",
    transform: "rotate(15deg)",
    zIndex: "-1",
  },
  "animation-5"
);

const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
const slider = document.querySelector(".slider");

let xPercent = 0;
let direction = -1;

function animate() {
  if (xPercent < -100) {
    xPercent = 0;
  } else if (xPercent > 0) {
    xPercent = -100;
  }

  firstText.style.transform = `translateX(${xPercent}%)`;
  secondText.style.transform = `translateX(${xPercent}%)`;

  requestAnimationFrame(animate);
  xPercent += 0.1 * direction;
}

animate(); // Start the animation loop

// Add scroll event listener for scroll-triggered animation
window.addEventListener("scroll", function () {
  const triggerPosition = window.innerHeight;

  // Check if the trigger position is reached
  if (window.scrollY > triggerPosition) {
    // Update animation or perform additional actions
    console.log("Scroll-triggered animation!");
  }
});
