let table = []

const states = ['Default', 'Asc', 'Desc'];

const tbl = document.getElementsByClassName('data-rows');
const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('age-input');
const gradeInput = document.getElementById('grade-input');
const inputRow = document.getElementById('input-row');


console.log(tbl);

document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        let nameIsValid = /^[a-zA-Z]+$/g.test(nameInput.value) && nameInput.value.length > 0 && nameInput.value.length <= 20;
        let ageIsValid = /^[0-9]+$/.test(ageInput.value) && Number(ageInput.value) > 0 && Number(ageInput.value) <= 100;
        let gradeIsValid = /^[0-9]+$/.test(gradeInput.value) && Number(gradeInput.value) >= 0 && Number(gradeInput.value) <= 100;
        if(nameIsValid && ageIsValid && gradeIsValid){
            const newRow = document.createElement('tr');
            let newNameCol = document.createElement('td');
            newNameCol.innerText = nameInput.value;
            let newAgeCol = document.createElement('td');
            newAgeCol.innerText = ageInput.value;
            let newGradeCol = document.createElement('td');
            newGradeCol.innerText = gradeInput.value;
            
            table.push(
                { 
                    name: nameInput.value,
                    age: ageInput.value,
                    grade: gradeInput.value,
                 }
            );

            newRow.append(newNameCol, newAgeCol, newGradeCol);
            inputRow.insertAdjacentElement('beforebegin', newRow);
            nameInput.value = '';
            ageInput.value = '';
            gradeInput.value = '';
        }
    }
})