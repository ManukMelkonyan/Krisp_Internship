const fontColourButton = document.getElementById('font-color-btn');
const backgroundColourButton = document.getElementById('background-color-btn');

const fontColourInput = document.getElementById('font-color-input');
const backgroundColourInput = document.getElementById('background-color-input');
const paragraphItems = document.getElementsByClassName('paragraphs');

const isValidHexColor = (colorStr) => /^#[0-9A-F]{6}$/i.test(colorStr);

fontColourButton.addEventListener('click', function(){
    let inputColor = fontColourInput.value;
    if(isValidHexColor(inputColor)){
        for(let p of paragraphItems){
            p.style.color = inputColor;
        }
    }
    else{
        alert('Input correct hex data');
    }
})

backgroundColourButton.addEventListener('click', function(){
    let inputColor = backgroundColourInput.value;
    if(isValidHexColor(inputColor)){
        for(let p of paragraphItems){
            p.style.backgroundColor = inputColor;
        }
    }
    else{
        alert('Input correct hex data');
    }
})