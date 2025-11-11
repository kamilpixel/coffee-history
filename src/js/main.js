import "iconify-icon";
import "../css/main.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Initialize smooth scrolling
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1,
  normalizeScroll: true,
  ignoreMobileResize: true,
  effects: true,
  preventDefault: true,
});

// Initialize parallax effect for intro image
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

// Intro text animation
gsap.fromTo(
  ".banner__section-heading",
  {
    y: "10%",
    opacity: 0,
  },
  {
    y: "0%",
    opacity: 1,
    ease: "expo.inOut",
    delay: 1,
    duration: 2,
  }
);
gsap.fromTo(
  ".banner__section-description",
  {
    y: "10%",
    opacity: 0,
  },
  {
    y: "0%",
    opacity: 1,
    ease: "expo.inOut",
    delay: 2,
    duration: 2,
  }
);

// Show hide pop up
const popupElement = document.getElementById('popup')
const popupAction = {
  show: () => {
    popupElement.style.display = 'block';
    document.body.style.overflow = 'hidden';
  },
  hide: () => {
    popupElement.style.display = 'none';
    document.body.style.overflow = 'auto';
  }  
}

// Add button event for Show Trivia
document.getElementById("btnShowTrivia").addEventListener("click", () => {
  popupAction.show();
});
document.getElementById("btnClosePopup").addEventListener("click", () => {
  popupAction.hide();
});


