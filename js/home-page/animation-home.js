// tutorial
gsap.from('.tutorial-heading',{
    scrollTrigger: {
        trigger: '.tutorial-heading',
        start: "top bottom",
        end: "top bottom",
        scrub: 1,
    }, 
        opacity: 0,
        y: 100,
});



gsap.from('.tutorial-text-wrapper',{
    scrollTrigger: {
        trigger: '.tutorial-heading',
        start: "top bottom",
        end: "top bottom",
        scrub: 1,
    }, 
        opacity: 0,
        y: 100,
});

// parallax video
gsap.to(".tutorial-video-wrapper", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: ".tutorial-video-wrapper",
      // start: "top bottom", 
      // end: "bottom top",
      scrub: true
    }, 
});


// teacher text

gsap.from('.teacher-container-item__content-container',{
    scrollTrigger: {
        trigger: '.teacher-container-item__content-container',
        start: "top bottom",
        end: "top bottom",
        scrub: 1,
    }, 
        opacity: 0,
        y: 100,
});

//contact text decoration 
// parallax text decoratin
gsap.to(".decoration-text-container-main2", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".decoration-text-container-main2",
      start: "top center", 
      end: "top center",
      scrub: true
    }, 
});