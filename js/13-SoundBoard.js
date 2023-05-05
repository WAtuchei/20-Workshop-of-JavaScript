const soundBTN = document.querySelectorAll('.soundBTN'),
    soundBar = document.getElementById('soundBar')

soundBTN.forEach((sBTN) => {
    const fileName = sBTN.getAttribute('data'),
        soundPath = `13-Sound-Board/${fileName}.wav`

    sBTN.innerText = fileName
    sBTN.addEventListener('click', () => {
        soundBar.src = soundPath
        soundBar.volume = 0.15
    })
    
    soundBar.onended = () => {
        setTimeout(() => {
            soundBar.src = ""
        }, 3000);
    }
})
