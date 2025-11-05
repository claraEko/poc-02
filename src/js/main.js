import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// === Timeline liée au scroll ===
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".zoom-container",
    start: "top top",
    end: "bottom+=6000 top",
    scrub: true,
    pin: true,
    markers: false, // mets true pour voir les repères
  },
});

// === Séquence d’animations ===
tl.to(".zoom-01", { scale: 3, y: 2800, duration: 30, ease: "none" })
  .to(".zoom-02", { scale: 3, y: 2800, duration: 30, ease: "none" })
  .to(".zoom-03", { scale: 3, y: 2800, duration: 30, ease: "none" })
  .to(".zoom-04", { scale: 3, y: 2800, duration: 30, ease: "none" })
  .to(".zoom-05", { scale: 3, y: 2800, duration: 30, ease: "none" })
  .to(".zoom-06", { y: -1000, duration: 30, ease: "none" });
