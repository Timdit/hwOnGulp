const blur = () => {
    let menuCard = document.querySelectorAll('.main__content-menuCard'),
        menuImg = document.querySelectorAll('.main__content-menuImg'),
        menuCardText = document.querySelectorAll('.main__content-menuItemText'),
        menuCardBtn = document.querySelectorAll('.main__content-menuItemBtn');


    menuCard.forEach((item, i) => {
        item.addEventListener('click', () => {
            removeActive()
            menuCardText[i].classList.add('active')
            menuImg[i].classList.add('active')
            menuCardBtn[i].classList.add('active')
        })
    })

    function removeActive(array) {
        menuCard.forEach((item, i) => {
            item.classList.remove('active');
            menuCardText[i].classList.remove('active')
            menuImg[i].classList.remove('active')
            menuCardBtn[i].classList.remove('active')
        })
    }

}

export default blur