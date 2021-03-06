// heading text welcome anim

tl.to('.heading-main', {
    opacity: 1,
    delay: 0.5,
});

tl.to('.subheading-main', {
    opacity: 1,
    delay: 0.5,
});

tl.to('.continue-button-main', {
    opacity: 1,
}, "<");

tl.to('.arrow-container-main', {
    opacity: 1,
    delay: 0.5,
});


// heading text parallax

gsap.to(".heading-main", {
    yPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", 
      // end: "bottom top",
      scrub: true
    }, 
});
gsap.to(".subheading-main", {
    yPercent: -400,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", 
      // end: "bottom top",
      scrub: true
    }, 
});


// info section

//decoration text

gsap.to(".decoration-text-container-main", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", 
      // end: "bottom top",
      scrub: true
    }, 
});

// info 
gsap.from('.text-wrapper',{
    scrollTrigger: {
        trigger: '.info-heading',
        start: "top bottom",
        end: "top bottom",
        scrub: 1,
    }, 
        opacity: 0,
        y: 100,
});


// video play 

document.querySelector('.video-main--item').play();
