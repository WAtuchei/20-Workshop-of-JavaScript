const openModal = document.querySelector('.openModal'),
    closeModal = document.querySelector('.closeModal'),
    modal = document.querySelector('#Modal');

openModal.addEventListener('click', () => {
    $(modal).css({"opacity": "1",
                "pointer-events": "all"});
    
    $('.modal-con').css({"opacity": "1",
                        "pointer-events": "all"})
}) 

closeModal.addEventListener('click', () => {
    $(modal).css({"opacity": "0",
                "pointer-events": "none"})

    $('.modal-con').css({"opacity": "0",
                        "pointer-events": "none"})
})

const modalCon = document.querySelector('.modal-con')
modalCon.addEventListener('click', (e) => {
    $(modal).css({"opacity": "0",
                "pointer-events": "none"})

    $('.modal-con').css({"opacity": "0",
                        "pointer-events": "none"})
})