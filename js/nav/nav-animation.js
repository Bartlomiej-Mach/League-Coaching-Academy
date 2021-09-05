const tl = gsap.timeline();


tl.from('.navigation-section__logo-container', {
    opacity: 0,
    delay: 0.3,
});
tl.from('.navigation-section__nav-list-container', {
    opacity: 0,
}, "<");