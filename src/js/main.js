import "iconify-icon";
import "../css/main.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

// Initialize smooth scrolling
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1,
  normalizeScroll: true,
  ignoreMobileResize: false,
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
  ".banner-element-animation",
  {
    opacity: 0,
    y: 70,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    stagger: 0.4,
    ease: "expo.out",
  }
);

// Image intro animation
gsap.fromTo(
  '[data-animation-id="imageIntro"]',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 3,
    delay: 1,
  }
);

// Section images animation
for (let index = 1; index <= 5; index++) {
  gsap.fromTo(
    `[data-animation-id="sectionImage${index}"]`,
    {
      x: (index % 2 === 0) ? 100 : -100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: `[data-animation-id="sectionAnim${index}"]`,
        start: "top center",
        end: "30% center",
        // markers: true,
        toggleActions: "restart complete restart reset",
        scrub: 2,
      },
      x: 0,
      opacity: 1,
      duration: 3,
    }
  );
}

// Section text animation
for (let index = 1; index <= 5; index++) {
  gsap.fromTo(
    `[data-animation-id="sectionText${index}"]`,
    {
      x: (index % 2 === 0) ? -30 : 30,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: `[data-animation-id="sectionAnim${index}"]`,
        start: "top center",
        end: "30% center",
        toggleActions: "restart complete restart reset",
        scrub: 1,
      },
      x: 0,
      opacity: 1,
      duration: 2,
    }
  );
}

// sectionClosing animation
gsap.fromTo(
  `[data-animation-id="sectionClosing"]`,
  {
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: `[data-animation-id="sectionClosing"]`,
      start: "top center",
      end: "30% center",
      toggleActions: "restart complete restart reset",
      scrub: 2,
    },
    opacity: 1,
    duration: 3,
  }
);

// Show hide pop up
const popupElement = document.getElementById("popup");
const popupAction = {
  show: () => {
    popupElement.style.display = "block";
    gsap.fromTo(
      popupElement,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "expo.inOut",
      }
    );
  },
  hide: () => {
    popupElement.style.display = "none";
    document.body.style.overflow = "auto";
  },
};

// Show Trivia button event
document.getElementById("btnShowTrivia").addEventListener("click", () => {
  popupAction.show();
});
document.getElementById("btnClosePopup").addEventListener("click", () => {
  popupAction.hide();
});

// Button start event
document.getElementById("btnStart").addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#section1" },
    ease: "expo.inOut",
  });
});

// Button restart event
document.getElementById("btnRestart").addEventListener("click", () => {
  gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "expo.inOut" });
});

// TODO add preloader