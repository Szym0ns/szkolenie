const slider = document.getElementById('slider');
const controls = slider.querySelectorAll('a')
const slides = slider.querySelectorAll('li')
let index = 0;

controls[0].addEventListener('click', nextSlide)
controls[1].addEventListener('click', prevSlide)

function nextSlide(){
    slides[index].classList.remove('active');
    index++;
    if (index > (slides.length-1)) {
        index = 0;
    }
    slides[index].classList.add('active');   
}

function prevSlide() {
    slides[index].classList.remove('active');
    index--;
    if (index < 0) {
        index = (slides.length-1);
    }
    slides[index].classList.add('active');
}