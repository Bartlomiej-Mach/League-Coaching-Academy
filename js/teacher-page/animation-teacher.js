const line = document.querySelector('.line');

//line animation
gsap.from(line, {
    height: 0,
    duration: 4,
    delay: 0.4,
});


// heading text welcome anim

tl.to('.heading-main', {
    opacity: 1,
    delay: 0.5,
});

tl.to('.header-section__slider-name-container', {
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

gsap.from('.info-section__content-container',{
    scrollTrigger: {
        trigger: '.info-section__content-container',
        start: "top bottom",
        end: "top bottom",
        scrub: 1,
    }, 
        opacity: 0,
        y: 100,
});

// about-teacher-section__floor-container

gsap.from('.about-teacher-section__floor-container',{
    scrollTrigger: {
        trigger: '.about-teacher-section__floor-container',
        start: "top bottom",
        end: "top bottom",
        scrub: 1,
    }, 
        opacity: 0,
        y: 100,
});

// opinion section 

gsap.from('.opinion-container-item__content-container',{
    scrollTrigger: {
        trigger: '.opinion-container-item__content-container',
        start: "top bottom",
        end: "top bottom",
        scrub: 1,
    }, 
        opacity: 0,
        y: 100,
});

// more section

gsap.from('.more-teachers-section__content-container',{
    scrollTrigger: {
        trigger: '.more-teachers-section__content-container',
        start: "top bottom",
        end: "top bottom",
        scrub: 1,
    }, 
        opacity: 0,
        y: 100,
});
