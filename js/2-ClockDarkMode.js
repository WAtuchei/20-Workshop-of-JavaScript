const timeEl = document.getElementById('timeEl'),
    timeBTN = document.getElementById('timeBTN');

const clockTime = () => {
    const time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    timeEl.innerHTML = 
        `${hours<10 ? `0${hours}` : `${hours}`} : 
        ${minutes<10 ? `0${minutes}` : `${minutes}`} : 
        ${seconds<10 ? `0${seconds}` : `${seconds}`}`
}

timeBTN.addEventListener('click', () => {
    timeBTN.textContent = "โหมดกลางวัน"
})

clockTime();
setInterval(clockTime, 1000)