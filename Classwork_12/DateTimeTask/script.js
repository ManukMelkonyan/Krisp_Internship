let btn = document.getElementById('dateButton');
let txtElem = document.getElementById('dateText');
console.log(btn);
console.log(txtElem);
btn.addEventListener('click', function(){
    let currentDate = new Date();
    let formatted = `${currentDate.toLocaleDateString("en-US", {day: 'numeric'})}/${currentDate.toLocaleDateString("en-US", {month: 'short'})}/${currentDate.toLocaleDateString("en-US", {year: 'numeric'})}`;
    txtElem.innerText = formatted;
    txtElem.classList.toggle('hide-or-show');
});

