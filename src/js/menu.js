const menuImage = document.querySelector('#menu-imagen');
const menu = document.querySelector('#menu');
const menuOpen = document.querySelector('#menu-open');
const buttons = document.querySelectorAll('.btn-menu');


menuImage.addEventListener('click', function(){
    menu.classList.toggle('opacity-0');
    menuImage.classList.toggle('opacity-0');
    menuOpen.classList.toggle('opacity-0');
    buttons.forEach(button => {
        button.classList.toggle('hidden');
    })
})