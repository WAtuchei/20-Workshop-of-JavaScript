const fetchCountries = async() => {
    const url = 'https://restcountries.com/v3.1/all',
        res = await fetch(url),
        arr = await res.json()

        arr.forEach(item => {
            createCard(item)
        });

}

const createCard = (data) => {
    const cardCon = document.querySelector('.Cards-con')
    const cardEl = document.createElement('div')
        cardEl.classList.add("Cards", "wrapper-col", "m-1", "p-0", "w-100", "text-center")
    const cardContent = `
        <img class="mb-2" src="${data.flags.png}">
        <h4>${data.name.common}</h4>
        <p>${data.capital}</p>`
        
    cardEl.innerHTML = cardContent
    cardCon.appendChild(cardEl)

    if(cardCon.children.length >= 15) {
        setTimeout(createCard())
    }
}

fetchCountries()