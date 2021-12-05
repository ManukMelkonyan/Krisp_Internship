const counterElement = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease-btn')
const resetBtn = document.getElementById('reset-btn')
const increaseBtn = document.getElementById('increase-btn')

localStorage.setItem('counter', 0);

function updateLocalStorage(){
    localStorage.setItem('counter', counterElement.innerText);
}

decreaseBtn.addEventListener('click', () => {
    let numVal = Number(counterElement.innerText);
    if(numVal > 0){
        counterElement.innerText = numVal - 1;
        updateLocalStorage();
    }
});

increaseBtn.addEventListener('click', () => {
    let numVal = Number(counterElement.innerText);
    counterElement.innerText = numVal + 1;
    updateLocalStorage();
});

resetBtn.addEventListener('click', () => {
    counterElement.innerText = 0;
    updateLocalStorage();
});


