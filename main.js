import './styles/style.scss'

/* Horizontal carousel scroll buttons */
const scrollContainer = document.querySelector('.carousel-gallery');
const backBtn = document.getElementById("button-left");
const nextBtn = document.getElementById("button-right");
const carouselImage = document.getElementById("carousel-image");

nextBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += carouselImage.offsetWidth * 2;
}); /* scroll to right within 2 images */

backBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= carouselImage.offsetWidth * 2;
});


/* Menu script for mobile */
const hamburgerMenu = document.getElementById('burger');
const navMenu = document.getElementById('navigation');

hamburgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    hamburgerMenu.classList.toggle('open');
});