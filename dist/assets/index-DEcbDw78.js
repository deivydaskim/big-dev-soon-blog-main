(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=i(s);fetch(s.href,e)}})();function l(){const a=`
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
        `;document.getElementById("footer").innerHTML=a;const t=document.querySelector(".carousel-gallery"),i=document.getElementById("button-left"),o=document.getElementById("button-right"),s=document.getElementById("carousel-image");o.addEventListener("click",()=>{t.scrollLeft+=s.offsetWidth*2}),i.addEventListener("click",()=>{t.scrollLeft-=s.offsetWidth*2})}function n(){const a=`
        <img src="assets/icons/logo.svg" alt="logo" class="logo">
        <nav id="navigation">
            <ul class="nav-menu">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div class="nav-seperator"></div>
            <ul class="nav-social-links">
                <li><a href="#"><img src="assets/icons/rss.svg" alt="rss"></a></li>
                <li><a href="#"><img src="assets/icons/facebook.svg" alt="facebook"></a></li>
                <li><a href="#"><img src="assets/icons/instagram.svg" alt="instagram"></a></li>
                <li><a href="#"><img src="assets/icons/twitter.svg" alt="twitter"></a></li>
                <li><a href="#"><img src="assets/icons/mail.svg" alt="mail"></a></li>
            </ul>
            <div class="nav-seperator"></div>
            <button class="nav-search-icon"><img src="assets/icons/search.svg" alt="search"></button>
        </nav>
        <button id="burger" class="burger"><img src="assets/icons/hamburger-menu.svg" alt=""></button>
        `;document.getElementById("header").innerHTML=a;const t=document.getElementById("burger"),i=document.getElementById("navigation");t.addEventListener("click",function(){i.classList.toggle("show"),t.classList.toggle("open")})}document.addEventListener("DOMContentLoaded",function(){n(),l()});
