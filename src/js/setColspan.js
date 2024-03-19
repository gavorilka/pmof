function adjustColspan() {
    const rows = document.querySelectorAll('.sm-offset-col')
    const windowWidth = window.innerWidth

    rows.forEach(row => {
        if (windowWidth > 576) {
            row.removeAttribute('colspan')
        } else {
            row.setAttribute('colspan', '2')

        }
    })
}

// Вызов функции после загрузки DOM
document.addEventListener('DOMContentLoaded', adjustColspan);

// Вызов функции при изменении размера окна
window.onresize = adjustColspan;
// Вызов функции при загрузке страницы и изменении размера окна
// window.addEventListener('load', adjustColspan)
// window.addEventListener('resize', adjustColspan)