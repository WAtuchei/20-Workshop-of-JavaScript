const createCard = () => {
    const CardZone = document.querySelector('.Cards-con'),
        Cards = document.createElement('div'),
        url = 'https://source.unsplash.com/random',
        CardsIMG = `
            <img src="${url}"></img>
        `

        Cards.classList.add("Cards", "mx-3", "my-2")
        Cards.innerHTML = CardsIMG
        CardZone.appendChild(Cards)

    if(CardZone.children.length < 10) {
        createCard()
    }
}
createCard()

const randomNum = () => {
    const num = Math.floor(Math.random() *101)

    if (num === 100) {
        console.log(num);
    }
    else {
        setTimeout(() => {
            randomNum()
        }, 100);
        console.log(num);
    }
}
randomNum()