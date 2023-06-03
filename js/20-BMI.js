const weight = document.getElementById('weight'),
    height = document.getElementById('height'),
    BTN = document.getElementById('BTN'),
    result = document.getElementsByClassName('Results')

function CalculateBMI(kgs, cms) {
    let ht = cms.value/100,
        wt = kgs.value

    if (wt == "" && ht == "") {
        $(result).text('กรุณาใส่ตัวเลข')
    }
    else if (isNaN(wt) && isNaN(ht)) {
        $(result).text('กรุณาใส่เป็นตัวเลข')
    }
    else if (wt == "" || isNaN(wt)) {
        $(result).text('กรุณาใส่เลขน้ำหนัก')
    }
    else if (ht == "" || isNaN(ht)) {
        $(result).text('กรุณาใส่เลขส่วนสูง')
    }
    else {
        bmi = (wt / ht ** 2).toFixed(2)

        if (bmi < 18.5) {
            $(result).text(bmi + ' = ผอมเกินไป')
            $(result).addClass('appear-alert')
        }
        else if (bmi < 25) {
            $(result).text(bmi + ' = ปกติ')
            $(result).addClass('appear-average')
        }
        else if (bmi < 30) {
            $(result).text(bmi + ' = อ้วน')
            $(result).addClass('appear-chubby')
        }
        else {
            $(result).text(bmi + ' = อ้วนมาก')
            $(result).addClass('appear-fat')
        }
    }

    kgs.addEventListener('keyup', () => {
        $(result).text('')
        $(result).removeClass('appear-alert appear-average appear-chubby appear-fat')
    })
    cms.addEventListener('keyup', () => {
        $(result).text('')
        $(result).removeClass('appear-alert appear-average appear-chubby appear-fat')
    })
}

BTN.addEventListener('click', (e) => {
    e.preventDefault()
    CalculateBMI(weight, height)
})