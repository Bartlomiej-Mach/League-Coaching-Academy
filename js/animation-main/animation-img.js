const movieContainer = document.querySelector('.header-section__teacher-img-container');

movieContainer.style.backgroundPosition = `50% 0px`;

// gsap.to(movieContainer, {
//   backgroundPosition: `50% ${innerHeight / 2}px`,
//   ease: "none",
//   scrollTrigger: {
//     trigger: movieContainer,
//     scrub: true
//   }
// });

gsap.to(movieContainer, {
  backgroundPosition: `50% ${innerHeight / 2}px`,
  ease: "in",
  scrollTrigger: {
    trigger: movieContainer,
    start: "top top", 
    end: "bottom top",
    scrub: true
  }
});