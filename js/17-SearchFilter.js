const getAPI = async() => {
    const url = 'https://restcountries.com/v3.1/all',
        res = await fetch(url),
        arr = await res.json()

        arr.forEach(item => {
            createCards(item)
        });
}

const createCards = (data) => {
    const contentZone = document.querySelector('.content'),
        contentCard = document.createElement('div'),
        content = `
            <div class="wrapper">
                <img src="${data.flags.png}">
            </div>
            <div class="wrapper-col">
                <h5 class="mb-2">${data.name.common}</h5>
                <p class="m-0">Population: <span>${countingNumber(data.population)}</span></p>
            </div>
        `
        
    function numberFormat(number) {
        const thoundsand = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return thoundsand
    }
    function countingNumber(number) {
        const start = 0,
        target = +number,
        increments = target / 440,
        fastCount = target - 700;

            if (start <= fastCount) {
                return number = `${Math.ceil(start + increments)}`;
                // setTimeout(countingNumber, .5)
            }
            else if (start < target) {
                return number = `${Math.ceil(start + increments)}`;
                // setTimeout(countingNumber, 120)
            }
            else {
                return number
            }
    }
        
    contentCard.classList.add('Cardcontent', 'wrapper', 'w-100', 'my-2', 'py-2', 'justify-content-around')
    contentCard.innerHTML = content
    contentZone.appendChild(contentCard)

    if (contentZone.children.length !== 0) {
        contentZone.style.visibility = 'visible'
    }
}
getAPI()