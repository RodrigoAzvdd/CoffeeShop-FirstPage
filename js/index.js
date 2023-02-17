const menu = document.querySelector('.menu')
const menuOptions = document.querySelector('.menu-options')
const hambBtn = document.querySelector('.hamburguer')
const container = document.querySelector('.container')
let click = false

hambBtn.addEventListener('click', () => {
    click = true

    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
        menu.style.alignItems = 'center'
        menuOptions.style.width = '70%'
    }
})
