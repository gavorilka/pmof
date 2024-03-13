import '@/scss/styles.scss'
import * as bootstrap from 'bootstrap'

import '@/js/script.js'

import Swiper from 'swiper'
import {Pagination, Grid, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
});

const swiper = new Swiper(".partnerSwiper", {
    modules: [ Autoplay ,Grid, Pagination],
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        968: {
            slidesPerView: 3
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});