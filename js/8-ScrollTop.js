const toTopBTN = document.querySelector('.Top-BTN')

window.onscroll = () => {
    let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        pageTop = document.documentElement.scrollTop,
        currentPage = ((pageTop / pageHeight) * 100);
    
    if (currentPage >= 20) {
        $(toTopBTN).addClass('BTN-show')
    }
    else {
        $(toTopBTN).removeClass('BTN-show')
    }

    toTopBTN.addEventListener('click', () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
