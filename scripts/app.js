const app = {};

// toggle hamburger menu
app.toggleHamburger = () => {
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelector('.menuItem')
    const button = document.querySelector('.hamburgerButton')

    button.addEventListener('click', () => {
        if (menu.classList.contains('showMenu')) {
            menu.classList.remove('showMenu');
            menuItem.classList.remove('showMenu');
            button.classList.remove('open')
        } else {
            menu.classList.add('showMenu')
            menuItem.classList.remove('showMenu')
            button.classList.add('open')
        }

    })
}

app.init = () => {
    app.toggleHamburger();
}

app.init();