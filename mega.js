 //alert('You are welcome to Dave-media')
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scrolled', window.scrollY > 0);
})

const textButtons = document.querySelectorAll('.contact__btn');
textButtons.forEach(textButtons => {
    let text = textButtons.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, mega) => 
`<span style="transform: rotate(${mega * 12}deg)">${character}</span>`).join('')
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});