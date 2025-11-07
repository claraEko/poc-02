// === Importation des modules GSAP et ScrollTrigger ===
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// On "active" le plugin ScrollTrigger pour pouvoir l'utiliser avec GSAP
gsap.registerPlugin(ScrollTrigger);

// === Création d'une timeline (suite d'animations) liée au scroll ===
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".zoom-container", // élément qui déclenche l'animation
    start: "top top", // quand le haut de .zoom-container touche le haut du viewport
    end: "bottom+=3500% top", // durée du scroll (ici très longue, 35x la hauteur de l'écran)
    scrub: true, // synchronise le scroll avec l'avancement de l'animation
    pin: true, // "bloque" la section pendant toute la durée de l’animation
    markers: false, // si true → affiche des repères visuels pour le debug
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
