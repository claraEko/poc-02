import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.to(".zoom-container", {
  scrollTrigger: ".zoom-container", // start the animation when ".box" enters the viewport (once)
  x: 500,
});
