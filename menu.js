let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let fechar= document.getElementById('fech-menu')


btnMenu.addEventListener('click',() => {
    menu.classList.add('abrir-menu')
})

fechar.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
})
