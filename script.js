var swiper = new Swiper(".mySwiper-1", {
    direction: "horizontal",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    autoplay: {
        delay: 4000
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

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`languages/${language}.json`); // Uso de comillas invertidas
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click", (e) => {
    const language = e.target.parentElement.dataset.language; // Obtención del idioma
    if (language) { // Verifica que se haya encontrado un idioma
        console.log(language); // Esto muestra el idioma en la consola
        changeLanguage(language); // Llama a la función para cambiar el idioma
    }
});
