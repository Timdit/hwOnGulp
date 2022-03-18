const burger = () => {
    let burgerBtn = document.querySelector('.header__box-burgerBtn'),
        menu = document.querySelector('.header__box-burgerMenu'),
        btn = document.querySelector('.header__box-btn'),
        menuOverlay = document.querySelector('.header__box-overlay'),
        bodyLock = document.querySelector('body'),
        spanLine = document.querySelector('.header__box-span'),
        spanLine2 = document.querySelector('.header__box-span2'),
        spanLine3 = document.querySelector('.header__box-span3');

    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        burgerBtn.classList.toggle('active')
        btn.classList.add('active')
        menuOverlay.classList.toggle('active')
        bodyLock.classList.toggle('lock')
        spanLine.classList.toggle('active')
        spanLine2.classList.toggle('active')
        spanLine3.classList.toggle('active')
    })

    menuOverlay.addEventListener('click', () => {
        burgerBtn.classList.remove('active')
        btn.classList.remove('active')
        menu.classList.remove('active')
        menuOverlay.classList.remove('active')
        bodyLock.classList.remove('lock')
        spanLine.classList.remove('active')
        spanLine2.classList.remove('active')
        spanLine3.classList.remove('active')
    })
}

export default burger