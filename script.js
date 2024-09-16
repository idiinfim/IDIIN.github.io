var swiper = new Swiper(".mySwiper-1", {
    direction: "horizontal",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    autoplay: {
        delay: 7000
    },

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    }

});
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }

});

let tabInputs = document.querySelectorAll(".tapInput");
tabInputs.forEach(function (input) {
    input.addEventListener('change', function () {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});
