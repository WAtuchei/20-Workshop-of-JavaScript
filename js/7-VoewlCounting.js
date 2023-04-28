const countInput = document.getElementById('countInput'),
    countNum = document.querySelector('.countNum')

countInput.addEventListener('keyup', () => {
    let word = countInput.value.toLowerCase(),
        voewlCount = 0

    for (i = 0; i < word.length; i++) {
        let letter = word[i]

        if (letter.match(/([a,e,i,o,u])/)) {
            voewlCount++
            $(countNum).text(voewlCount)
        }
    }
})