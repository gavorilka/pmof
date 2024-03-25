import '@/scss/styles.scss'
import * as bootstrap from 'bootstrap'

import '@/js/script.js'

import Swiper from 'swiper'
import {Pagination, Grid, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
});

new Swiper(".partnerSwiper", {
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

(function(m,e,t,r,i,k,a){
    m[i]=m[i] || function(){
        (m[i].a=m[i].a||[]).push(arguments)
    };
    m[i].l=1*new Date();
    for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
            return;
        }
    }
    k=e.createElement(t);
    a=e.getElementsByTagName(t)[0];
    k.async=1;
    k.src=r;
    a.parentNode.insertBefore(k,a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(96845549, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
});