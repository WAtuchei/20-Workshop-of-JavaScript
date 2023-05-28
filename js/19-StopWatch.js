const timeEl = document.getElementById('timeEl'),
    clockBTN = document.querySelectorAll('.ClockBTN')
let [mins, secs, millisecs] = [0, 0, 0],
    setTime = null

    timeEl.innerText = '00 : 00 : 00'

const Timer = () => {
    millisecs += 10
    if (millisecs == 1000) {
        millisecs = 00
        secs++
    }
    else if (secs == 10) {
        secs = 0
        mins++
    }
    cMins = mins < 10 ? `0${mins}` : mins
    cSecs = secs < 10 ? `0${secs}` : secs
    cMillisecs = millisecs.toString().slice(0, 2)
    Ms = cMillisecs < 10  ? `0${cMillisecs}` : cMillisecs
    
    timeEl.innerText = `${cMins} : ${cSecs} : ${Ms}`
}

const startTimer = () => {
    if(setTime != null) {
        clearInterval(setTime)
    }
    setTime = setInterval(Timer, 10)
}

const stopTimer = () => {
    clearInterval(setTime)
}

const resetTimer = () => {
    clearInterval(setTime)
    mins = 0
    secs = 0
    millisecs = 0
    timeEl.innerText = '00 : 00 : 00'
}

clockBTN[0].addEventListener('click', startTimer)
clockBTN[1].addEventListener('click', stopTimer)
clockBTN[2].addEventListener('click', resetTimer)