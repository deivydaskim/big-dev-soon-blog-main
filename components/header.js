export function loadHeader() {
    const header = `
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
        `;
    document.getElementById('header').innerHTML = header;

    /* Mobile navigation */
    const hamburgerMenu = document.getElementById('burger');
    const navMenu = document.getElementById('navigation');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        hamburgerMenu.classList.toggle('open');
    });
}