"use strict";
function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)]]
}
function countdownToDateTime(targetDate, showBlock, hiddenBlock) {
    const targetDateTime = new Date(targetDate).getTime();
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const timeDifference = targetDateTime - now;

        if (timeDifference <= 0) {
            clearInterval(timer);
            console.log('Указанной дата прошла');
            hiddenBlock.classList.remove("d-none")
            hiddenBlock.parentNode.classList.add('broadcast-with-video','mt-5')
            showBlock.classList.add("d-none")
            if (hiddenBlock.src.startsWith('https://www.youtube.com')) {
                    const lastLink = hiddenBlock.src.match('(?<=embed\\/)(.+)')
                    hiddenBlock.src += `?playlist=${lastLink}&autoplay=1&mute=1&loop=1`
            }
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            showBlock.innerHTML = `<div>
                <div class="text-center fw-bold text-success">До трансляции</div>
                <div class="text-center fw-bold">
                    <span class="text-success text-nowrap">${days} ${declOfNum(days, ['день', 'дня', 'дней'])} </span>
                    <span class="text-success text-nowrap">${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])} </span>
                    <span class="text-success text-nowrap">${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])} </span>
                    <span class="text-success text-nowrap">${seconds} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])} </span>
                </div>
            </div>`

        }
    }, 1000);
}

(()=> {
    const targetDate = '2024-03-27T10:00:00';
    //const targetDate = '2024-03-13T20:19:00';
    const urlPath = window.location.pathname
    if (urlPath == '/' || urlPath == ''){
        const showBlock = document.querySelector(".timer");
        const hiddenBlock = document.querySelector(".broadcast-media");
        countdownToDateTime(targetDate,showBlock,hiddenBlock);
    }
})();

(() => {
const forms = document.querySelectorAll('.needs-validation')
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})
})();
