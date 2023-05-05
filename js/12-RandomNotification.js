const notiBTN = document.getElementById('notiBTN'),
    notiZone = document.querySelector('.noti-con')

const message = [
    'Hello',
    'Goodbye',
    'How are you?',
    'This is notification',
    'Front-End Developer'
]

function randomNoti() {
    return message[Math.floor(Math.random()*message.length)]
}

const notiItem = () => {
    const notiEl = document.createElement('div')
    notiEl.classList.add('noti-item')
    notiEl.innerText = randomNoti()
    notiZone.appendChild(notiEl)

    setTimeout(() => {
        $(notiEl).css('animation', 'fading-out 2s ease')  
    }, 5000);
    setTimeout(() => {
        notiEl.remove()
    }, 6800);
}

notiBTN.addEventListener('click', notiItem)