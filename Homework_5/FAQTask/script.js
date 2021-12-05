const faqBlocks = document.getElementsByClassName('faq-block');

for(let block of faqBlocks){
    block.addEventListener('click', () => {
        let answer = block.querySelector('.answer');
        answer.classList.toggle('hide');
    })
}