const celcius = document.getElementById('Celcius'),
    fahren = document.getElementById('Fahren'),
    kevin = document.getElementById('Kevin'),
    tempInput = document.querySelectorAll('input')

tempInput.forEach(temp => {
    temp.addEventListener('keyup', (e) => {
        let tempV = parseInt(e.target.value),
            tempName = e.target.name

        if (tempName === 'Celcius') {
            let CtoF = ((tempV * 1.80) + 32),
                CtoK = (tempV + 273.15)

            fahren.value = CtoF.toFixed(2)
            kevin.value = CtoK.toFixed(2)
        }
        else if (tempName === 'Fahren') {
            let FtoC = ((tempV - 32) / 1.80),
                FtoK = FtoC + 273.15

            celcius.value = FtoC.toFixed(2)
            kevin.value =  FtoK.toFixed(2)
        }
        else if (tempName === 'Kevin') {
            let KtoC = (tempV - 273.15),
                KtoF = (KtoC * 1.80 + 32)

            celcius.value = KtoC.toFixed(2)
            fahren.value = KtoF.toFixed(2)
        }
    })
})