const smallIMG = document.querySelectorAll('.galleryIMG'),
    fullIMG = document.getElementById('fullIMG'),
    modalCON = document.querySelector('.modal-con'),
    modalBTN = document.querySelector('.closeModal')

smallIMG.forEach(img => {
    const fullsize = img.getAttribute('data'),
        imgPath = `10-foods-images/full/${fullsize}.jpg`

    img.addEventListener('click', () => {
        $('.modal-con').css({
            'opacity': '1',
            'pointer-events': 'all'
        })
        $('#Modal').css({
            'opacity': '1',
            'pointer-events': 'all'
        })
        $(fullIMG).css('pointer-events', 'all')
        fullIMG.src = imgPath
    })
})

modalBTN.addEventListener('click', () => {
    $('.modal-con').css({
        'opacity': '0',
        'pointer-events': 'none'
    })
    $('#Modal').css({
        'opacity': '0',
        'pointer-events': 'none'
    })
    $(fullIMG).css('pointer-events', 'none')
})
modalCON.addEventListener('click', () => {
    $('.modal-con').css({
        'opacity': '0',
        'pointer-events': 'none'
    })
    $('#Modal').css({
        'opacity': '0',
        'pointer-events': 'none'
    })
    $(fullIMG).css('pointer-events', 'none')
})