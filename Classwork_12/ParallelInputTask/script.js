const inputField = document.getElementById('inputField');
const outputParagraph = document.getElementById('outputParagraph');

inputField.addEventListener('input', function(){
    // console.log(inputField.value);
    outputParagraph.innerText = inputField.value;
})