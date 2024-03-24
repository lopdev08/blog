const iconHeart = document.querySelectorAll('#heart');

iconHeart.forEach(element => {
    element.addEventListener('click', function(){
        element.classList.toggle('text-[#d91111]')
    })
})

iconHeart.forEach(element => {
    element.addEventListener('click', function(){
        element.classList.toggle('dark:text-red-400')
    })
})