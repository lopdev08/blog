const searchInput = document.querySelector('#search');
const filterContainer = document.querySelector('#filter');
const elementosLista = document.querySelectorAll('.articulo');

searchInput.addEventListener('keyup', e=>{
    filterContainer.classList.remove('opacity-0');
    filterContainer.classList.remove('pointer-events-none');
    filterContainer.classList.add('pointer-events-auto');

    if(e.target.matches('#search')){
        
        if(e.key === "Escape" || e.target.value == ''){
            e.target.value = ''
            filterContainer.classList.remove('pointer-events-auto')
            filterContainer.classList.add('opacity-0', 'pointer-events-none')
        }

        elementosLista.forEach(elemento => {
            elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? elemento.classList.remove('hidden') : elemento.classList.add('hidden');
        })
    }
})