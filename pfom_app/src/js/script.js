"use strict";
function validateTextarea() {
    const errorMsg = "Не соответствует формату";
    const textarea = this;
    const pattern = new RegExp( textarea.getAttribute('pattern') );
    const valueLines = textarea.value.split("\n");

    valueLines.forEach(function(line) {
        if (line.trim() === '') {
            return true; // Пропускаем пустые строки
        }
        let hasError = !line.match(pattern);
        if (typeof textarea.setCustomValidity === 'function') {
            textarea.setCustomValidity(hasError ? errorMsg : '');
        } else {
            if (hasError) {
                textarea.setAttribute('title', errorMsg);
            } else {
                textarea.removeAttribute('title');
            }
        }
        return !hasError;
    });
}
function formatPhone ()  {
    let phone = this.value
    const x = phone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
    if (x[1] === '7' || x[1] === '8') {
        x[1] = '+7'
    } else {
        x[2] = x[1]
        x[1] = '+7'
    }
    phone = !x[3]
        ? x[1] + ' (' + x[2]
        : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')
    this.value = phone
}
function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)]]
}
function addZero(number) {
    if(number<10) {
        return '0'+number
    } else {
        return number
    }
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
                    hiddenBlock.src += `?playlist=${lastLink}&autoplay=1&mute=0&loop=1`
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
    const showBlock = document.querySelector(".timer");
    const hiddenBlock = document.querySelector(".broadcast-media");
    countdownToDateTime(targetDate,showBlock,hiddenBlock);
    document.querySelector("#phone").addEventListener('keyup',formatPhone);
    document.querySelector("#questionText").addEventListener('keyup',validateTextarea);
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
