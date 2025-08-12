const menuX = document.querySelector('.menuX');
const menu = document.querySelector('.menu');
    
menuX.addEventListener('click', () => {
    menuX.classList.toggle('active');
    menu.classList.toggle('active');
});
    
// Cerrar el menú al hacer clic en un enlace
const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuX.classList.remove('active');
        menu.classList.remove('active');
    });
});