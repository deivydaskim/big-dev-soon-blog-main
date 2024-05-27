export function loadFooter() {
    const footer = `
        <section class="social-media">
            <h3>Follow my lifestyle daily on Instagram and join 100k others</h3>
            <p>@diwan_ji01 / #thestylelife</p>
            <div class="gallery-container">
                <div class="carousel-gallery">
                    <img id="carousel-image" src="assets/images/photo-1.png">
                    <img src="assets/images/photo-2.png" alt="">
                    <img src="assets/images/photo-3.png" alt="">
                    <img src="assets/images/photo-4.png" alt="">
                    <img src="assets/images/photo-5.png" alt="">
                    <img src="assets/images/photo-6.png" alt="">
                    <img src="assets/images/photo-7.png" alt="">
                    <img src="assets/images/photo-8.png" alt="">
                    <img src="assets/images/photo-9.png" alt="">
                    <img src="assets/images/photo-10.png" alt="">
                    <img src="assets/images/photo-11.png" alt="">
                    <img src="assets/images/photo-12.png" alt="">
                    <img src="assets/images/photo-13.png" alt="">
                </div>
                <button id="button-left" class="arrow left"><img src="assets/icons/arrow-left.svg" alt=""></button>
                <button id="button-right" class="arrow right"><img src="assets/icons/arrow-right.svg" alt=""></button>
            </div>
        </section>
        <section class="footer-navigation mw-container">
            <div class="left-side">
                <img src="assets/icons/logo.svg" alt="logo">
                <p>Get inspired! Receive discoutns, tips and behind the scenes stories.</p>
                <form action="###">
                <input type="email" required placeholder="Your email">
                <button type="submit">Subscribe</button>
                </form>
            </div>
            <ul class="nav-menu">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div class="right-side">
                <div class="search-container">
                    <input type="search" placeholder="type here...">
                    <button><img src="assets/icons/search.svg" alt=""></button>
                </div>
                <ul class="nav-social-links">
                    <li><a href="#"><img src="assets/icons/rss.svg" alt="rss"></a></li>
                    <li><a href="#"><img src="assets/icons/facebook.svg" alt="facebook"></a></li>
                    <li><a href="#"><img src="assets/icons/instagram.svg" alt="instagram"></a></li>
                    <li><a href="#"><img src="assets/icons/twitter.svg" alt="twitter"></a></li>
                    <li><a href="#"><img src="assets/icons/mail.svg" alt="mail"></a></li>
                </ul>
            </div>
        </section>
        <hr>
        <section class="footer-bottom mw-container">
            <div class="copyright">
                <p>&copy; thestylelife 2024, All rights reserved</p>
            </div>
            <div class="links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms Of Service</a>
            </div>
        </section>
        `;

    document.getElementById('footer').innerHTML = footer;

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
}


