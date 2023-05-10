const searchInt = document.getElementById('searchInt'),
    searchBTN = document.getElementById('searchBTN')

searchBTN.addEventListener('click', () => {
    searchInt.classList.toggle('active-int')
    searchInt.focus()
})