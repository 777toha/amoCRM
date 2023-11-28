const headingOne = document.querySelector('.option__heading--1')
const headingTwo = document.querySelector('.option__heading--2')

window.addEventListener('resize', () => {
    const width = window.innerWidth
    if (width < 720) {
        headingOne.textContent = '30 виджетов'
        headingTwo.textContent = 'месяц amocrm'
    } else {
        headingOne.textContent = 'виджеты'
        headingTwo.textContent = '35 дней'
    }
})
