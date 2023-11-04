const toggleMenuElement = document.getElementById('toggle-menu')
const menuElement = document.getElementById('menu')

toggleMenuElement.addEventListener ('click', () => {
    menuElement.classList.toggle ('menu--show');
});