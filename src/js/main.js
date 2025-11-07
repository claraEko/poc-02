import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// === Timeline liée au scroll ===
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".zoom-container",
    start: "top top",
    end: "bottom+=3500% top",
    scrub: true,
    pin: true,
    markers: false, // mets true pour voir les repères
  },
});

// === Séquence d’animations ===
tl.to(".zoom-1-5", { scale: 3, y: "100%", duration: 5, ease: "none" })
  .to(".zoom-01", { scale: 3, opacity: 0, duration: 1, ease: "none" }, "-=3")
  .to(".zoom-2-5", { scale: 3, y: "100%", duration: 8, ease: "none" }, "-=3")
  .to(".zoom-02", { scale: 3, opacity: 0, duration: 1, ease: "none" }, "-=3")
  .to(".zoom-3-5", { scale: 3, y: "100%", duration: 8, ease: "none" }, "-=3")
  .to(".zoom-03", { scale: 3, opacity: 0, duration: 1, ease: "none" }, "-=3")
  .to(".zoom-4-5", { scale: 3, y: "100%", duration: 8, ease: "none" }, "-=3")
  .to(".zoom-04", { scale: 3, opacity: 0, duration: 1, ease: "none" }, "-=3")
  .to(".zoom-5-5", { scale: 3, y: "100%", duration: 8, ease: "none" }, "-=3")
  .to(".zoom-05", { scale: 3, opacity: 0, duration: 1, ease: "none" }, "-=3")
  .to(".zoom-06", { y: "-66%", duration: 4, ease: "power1.in" }, "-=1")
  .to(".scroll-h", { x: "-100%", duration: 10, ease: "power1.in" });
