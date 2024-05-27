import './styles/style.scss'
import { loadFooter } from './components/footer.js';
import { loadHeader } from './components/header.js';

/* Loading components */
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();
});