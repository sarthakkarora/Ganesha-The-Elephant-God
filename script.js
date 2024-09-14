const slides = document.querySelectorAll(".slide");
let counter = -1;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter > 0) {
        slides[counter].classList.remove("active");
        counter--;
        slideImage();
    }
};

const goNext = () => {
    if (counter < slides.length - 1) {
        if (counter >= 0) {
            slides[counter].classList.remove("active");
        }
        counter++;
        slideImage();
    }
};

const slideImage = () => {
    slides.forEach((slide, index) => {
        if (index === counter) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
};

// Initially, call goNext to display the first image
goNext();


//
let subMenu = document.getElementById("subMenu");
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}


//
const audio = document.getElementById('background-audio');
audio.play();



//
var images = document.querySelectorAll('.gallery img');

images.forEach(function (image) {
    image.addEventListener('click', function () {
        var imageNumber = this.getAttribute('data-image');
        var details = document.getElementById('details' + imageNumber);
        
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    });
});
