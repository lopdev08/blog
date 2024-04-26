const buttonComment = document.querySelector('#comentar');
const modalComment = document.querySelector('#modal-comentar');
const closeModalComment = document.querySelector('#cerrar-comentario');
const nameComment = document.querySelector('#nombre-comentario');
const commentArea = document.querySelector('#textarea-comentario');
const commentsContainer = document.querySelector('#comments-container');
const sendCommentButton = document.querySelector('#send-comment');


buttonComment.addEventListener('click', ()=>{
    modalComment.classList.remove('opacity-0', 'pointer-events-none');
});

closeModalComment.addEventListener('click', ()=>{
    modalComment.classList.add('opacity-0', 'pointer-events-none');
    nameComment.value = '';
    commentArea.value = '';
});

sendCommentButton.addEventListener('click', function(){
    const comment = commentArea.value;
    const name = nameComment.value;
    const date = new Date();
    
    const commentHTML = `<div class="flex justify-center items-center mt-5">
    <div class="w-[320px] md:w-[700px] h-auto text-white">
        <div class="bg-blue-500 dark:bg-blue-800 w-full h-auto flex">
            <p class="font-bold text-xl pl-2 pt-1 pb-1">${name}</p><div
                class="flex-grow"
            >
            </div><p class="font-semibold pr-1 pt-1.5 text-[14px]">
                ${date.getFullYear()}-${date.getMonth()}-${date.getDate()} (${date.getHours()}:${date.getMinutes()})
            </p>
        </div><div
            class="bg-slate-200 dark:bg-gray-600 dark:text-white w-full h-auto text-black px-3 py-3"
        >
            <p>${comment}</p>
        </div><div
            class="bg-white dark:bg-gray-700 dark:text-gray-200 w-full h-auto text-gray-600 flex"
        >
            <p class="font-bold px-2 py-2 cursor-pointer" id="btn-reply">Responder</p><div
                class="flex-grow"
            >
            </div><label
                id="icon-heart"
                class="icon-heart text-[20px] text-[#aaaaaa] dark:text-[#eceaea] dark:hover:text-[#e66a6a] pr-2 pt-2 cursor-pointer hover:text-[#d91111] transition-all duration-300"
            ></label>
        </div><div class="bg-black dark:bg-gray-900 w-full h-2"></div>
    </div>
</div>`

    commentsContainer.insertAdjacentHTML('afterend', commentHTML);

    const btnReply = document.querySelector('#btn-reply');
    btnReply.onclick = function(){
        openModalReply()
    }

    const iconHeart = document.querySelector('#icon-heart')
    iconHeart.onclick = function(){
        iconHeart.classList.toggle('text-[#d91111]');
    }

    modalComment.classList.add('opacity-0', 'pointer-events-none');
    nameComment.value = '';
    commentArea.value = '';
});

function openModalReply(){
    const modalReply = document.querySelector('#modal-responder');
    const closeModalReply = document.querySelector('#cerrar-respuesta');
    const nameReplyInput = document.querySelector('#nombre-respuesta');
    const replyArea = document.querySelector('#textarea-respuesta');
    const sendReplyButton = document.querySelector('#enviar-respuesta');

    modalReply.classList.remove('opacity-0', 'pointer-events-none');

    closeModalReply.addEventListener('click', ()=>{
        modalReply.classList.add('opacity-0', 'pointer-events-none');

        nameReplyInput.value = '';
        replyArea.value = '';
    })

    sendReplyButton.addEventListener('click', function(){
        sendReply(nameReplyInput, replyArea)
    })
}


function sendReply(name, reply){
}