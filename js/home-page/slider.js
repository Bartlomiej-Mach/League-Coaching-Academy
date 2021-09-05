// home slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "coverflow",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
});
