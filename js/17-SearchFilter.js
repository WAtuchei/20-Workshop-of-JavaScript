const getAPI = async() => {
    const url = 'https://restcountries.com/v3.1/all',
        res = await fetch(url),
        arr = await res.json()

        arr.forEach(item => {
            createCards(item)
        });
}

const searchInt = document.getElementById('filter'),
    resultArr = []
searchInt.addEventListener('input', (e) => {
    const find = e.target.value.toLowerCase()

    resultArr.forEach(item => {
        if(item.innerText.toLowerCase().includes(find)) {
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
            document.querySelector('.content').classList.remove('hide')
        }
    })
})

const createCards = (data) => {
    const contentZone = document.querySelector('.content'),
        contentCard = document.createElement('div'),
        content = `
            <div class="wrapper">
                <img src="${data.flags.png}">
            </div>
            <div class="wrapper-col">
                <h5 class="mb-2">${data.name.common}</h5>
                <p class="m-0">Population: <span>${numberFormat(data.population)}</span></p>
            </div>
        `
        
    function numberFormat(number) {
        const thoundsand = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return thoundsand
    }
        
    contentCard.classList.add('Cardcontent', 'wrapper', 'w-100', 'my-2', 'py-2', 'justify-content-around')
    contentCard.innerHTML = content
    contentZone.appendChild(contentCard)
    resultArr.push(contentCard)

    if (contentZone.children.length !== 0) {
        contentZone.style.visibility = 'visible'
    }
    else {
        contentZone.style.visibility = 'hidden'
    }
}

getAPI()