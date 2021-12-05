const ratio = {
    'amd': 480,
    'usd': 1,
}

const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
const firstOption = document.getElementById('firstOption');
const secondOption = document.getElementById('secondOption');

secondInput.disabled = true;

function convert(){
    if(/\d/g.test(firstInput.value)){    
        let fromValue = Number(firstInput.value);
        let firstCurrency = firstOption.value;
        let secondCurrency = secondOption.value;
        let toValue =  ratio[secondCurrency] / ratio[firstCurrency] * fromValue;
        secondInput.value = toValue;
    }
}

firstInput.addEventListener('input', convert);
firstOption.addEventListener('change', convert);

secondInput.addEventListener('input', convert);
secondOption.addEventListener('change', convert);