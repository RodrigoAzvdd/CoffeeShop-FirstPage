const menu = document.querySelector('.menu')
const hambBtn = document.querySelector('.hamburguer')

hambBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    if(menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }

})