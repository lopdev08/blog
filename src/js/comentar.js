const buttonComment = document.querySelector('#comentar');
const modalComment = document.querySelector('#modal-comentar');
const closeModalComment = document.querySelector('#cerrar-comentario');
const nameComment = document.querySelector('#nombre-comentario');
const commentArea = document.querySelector('#textarea-comentario');
const commentsContainer = document.querySelectorAll('#comments-container');
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
        
    commentsContainer.forEach(container =>{
        const divComment = document.createElement('div');

        divComment.classList.add('flex','justify-center','items-center','mt-5');
        container.prepend(divComment);

        const bodyComment = document.createElement('div');
        bodyComment.classList.add('w-[320px]', 'md:w-[700px]', 'h-auto', 'text-white');
        divComment.append(bodyComment);

        const headerComment = document.createElement('div');
        headerComment.classList.add('bg-blue-500', 'dark:bg-blue-800', 'w-full', 'h-auto', 'flex');
        bodyComment.append(headerComment);

        const nameCommentSend = document.createElement('p');
        nameCommentSend.classList.add('font-bold', 'text-xl', 'pl-2', 'pt-1', 'pb-1');
        nameCommentSend.textContent = name;
        headerComment.append(nameCommentSend);

        const divSeparator = document.createElement('div');
        divSeparator.classList.add('flex-grow');
        headerComment.append(divSeparator);

        const dateComment = document.createElement('p');
        dateComment.classList.add('font-semibold', 'pr-1', 'pt-1.5', 'text-[14px]');
        dateComment.textContent = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} (${date.getHours()}:${date.getMinutes()})`;
        headerComment.append(dateComment);

        const contentComment = document.createElement('div');
        contentComment.classList.add('bg-slate-200', 'dark:bg-gray-600', 'dark:text-white', 'w-full', 'h-auto', 'text-black', 'px-3', 'py-3');

        bodyComment.append(contentComment);

        const textComment = document.createElement('p');
        textComment.textContent = comment;
        contentComment.append(textComment);

        const footerComment = document.createElement('div');
        footerComment.classList.add('bg-white', 'dark:bg-gray-700', 'dark:text-gray-200', 'w-full', 'h-auto', 'text-gray-600', 'flex');
        bodyComment.append(footerComment);

        const replyText = document.createElement('p');
        replyText.classList.add('font-bold', 'px-2', 'py-2', 'cursor-pointer');
        replyText.textContent = "Responder";
        footerComment.append(replyText);

        replyText.onclick = function(){
            openModalReply();
        }

        const heartSeparator = document.createElement('div');
        heartSeparator.classList.add('flex-grow');
        footerComment.append(heartSeparator);

        const iconHeartLabel = document.createElement('label');
        iconHeartLabel.classList.add('icon-heart', 'text-[20px]', 'text-[#aaaaaa]', 'dark:text-[#eceaea]', 'dark:hover:text-[#e66a6a]', 'pr-2', 'pt-2', 'cursor-pointer', 'hover:text-[#d91111]', 'transition-all', 'duration-300');
        
        iconHeartLabel.onclick = function(){
            iconHeartLabel.classList.toggle('text-[#d91111]');
        }

        footerComment.append(iconHeartLabel);

        const blackDiv = document.createElement('div');
        blackDiv.classList.add('bg-black', 'dark:bg-gray-900', 'w-full', 'h-2');
        bodyComment.append(blackDiv);

        

        modalComment.classList.add('opacity-0', 'pointer-events-none');
        nameComment.value = '';
        commentArea.value = '';

    });
})

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