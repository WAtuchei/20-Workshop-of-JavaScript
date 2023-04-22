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
    if ($('body').hasClass('dark')) {
        $('body').removeClass('dark')
        $(timeEl).css("color", "#000")
        $(timeBTN).removeClass('darkClock')
        $(timeBTN).text('โหมดกลางคืน')
    }
    else {
        $('body').addClass('dark');
        $(timeEl).css("color", "#fff")
        $(timeBTN).addClass('darkClock')
        $(timeBTN).text('โหมดกลางวัน');
    }
})

clockTime();
setInterval(clockTime, 1000)