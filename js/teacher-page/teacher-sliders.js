let slides = 3;
if(matchMedia("(max-width: 960px)").matches) {
    slides = 2;
} 
if (matchMedia("(max-width: 500px)").matches) {
    slides = 1;
}


// name slider on home section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: slides,
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