const tl = gsap.timeline();


tl.from('.navigation-section__logo-container', {
    opacity: 0,
    delay: 0.3,
});
tl.from('.navigation-section__nav-list-container', {
    opacity: 0,
}, "<");



const navList = document.querySelector('.navigation-section__nav-list-container');
const navBtn = document.querySelector('.navigation-section__button-container');

const openCloseNav = () => {
    navList.classList.toggle('nav-list--active');
    navBtn.classList.toggle('nav-btn--active');
}

navBtn.addEventListener('click', openCloseNav);