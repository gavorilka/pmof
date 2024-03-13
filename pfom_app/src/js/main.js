import '@/scss/styles.scss'
import * as bootstrap from 'bootstrap';
import '@/js/script.js'

let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
});