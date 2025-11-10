import "../css/main.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
 wrapper: "#smooth-wrapper",
 content: "#smooth-content",
 smooth: 1,
 normalizeScroll: true,
 ignoreMobileResize: true,
 effects: true,
 preventDefault: true
});




const elImageIntro = document.querySelectorAll(".image-intro");
gsap.fromTo(
  elImageIntro,
  {
    backgroundPosition: "50% 0px",
  },
  {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: elImageIntro,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  }
);

// parallax text effect
// const elTextIntroHead = document.querySelectorAll(".text__intro--heading");
// gsap.fromTo(
//   elTextIntroHead,
//   {
//     y: "20%",
//   },
//   {
//     y: "-20%",
//     ease: "none",
//     scrollTrigger: {
//       trigger: elTextIntroHead,
//       start: "top bottom",
//       end: "bottom top",
//       scrub: 1,
//       invalidateOnRefresh: true,
//     },
//   }
// );
