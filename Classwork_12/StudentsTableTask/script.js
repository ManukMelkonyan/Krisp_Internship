let table = [
    {
        name: 'John',
        age: 21,
        grade: 20,
    }
]

const tbl = document.getElementsByClassName('data-rows');
const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('age-input');
const gradeInput = document.getElementById('grade-input');

console.log(tbl);

document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        console.log('Entered!!!');
        console.log(nameInput);
        console.log(ageInput);
        console.log(gradeInput);
        // if()
    }
})