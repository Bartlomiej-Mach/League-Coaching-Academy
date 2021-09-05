
// name slider on home section

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        disableOnInteraction: false,
    },
    loop: true,
});


//opinion slider 

var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 5000,
    },
    loop: true,
});