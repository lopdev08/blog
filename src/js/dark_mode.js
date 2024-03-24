const darkCheckBox = document.querySelector('#check');

darkCheckBox.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
})
