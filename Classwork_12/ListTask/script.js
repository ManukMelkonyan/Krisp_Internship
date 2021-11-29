const listInputField = document.getElementById('list-input');
const listItems = document.getElementById('main-list').children;
const addButton = document.getElementById('add-button');
const removeButtons = document.getElementsByClassName('remove-button');


function createListItem(text){
    let newListItem = document.createElement('li');
    newListItem.innerText = text;
    newListItem.addEventListener('click', function(e){
        if(!e.target.classList.contains('line-through')){
            for(let j = 0; j < listItems.length; ++j){
                if(listItems[j] === e.target){
                    break;
                }
                if(!listItems[j].classList.contains('line-through')){
                    return;
                }
            }
        }
        
        e.target.classList.toggle('line-through');
    });
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    removeBtn.innerText = 'X';
    removeBtn.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })
    newListItem.append(removeBtn);
    return newListItem;
}


const addButtonClickCallback = function(e){
    let inputField = document.getElementById('list-input');
    if(inputField.value !== ''){
        let newListItem = createListItem(inputField.value);
        document.getElementById('main-list').append(newListItem);
        inputField.value = '';
    }
};
listInputField.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addButtonClickCallback(e);
    }
});

addButton.addEventListener('click', addButtonClickCallback);

(function initializationOfTheList(){
    const initialListValues = ['Wake up at 07:00.', 'Leave for a work at 08:30.', 'Meeting at 11:00.', '12:00-13:00 lunchtime.', '18:15 shopping at the nearby grocery.', 'Dinner with friends at 19:20.', 'Finish freelance work until 01:00.'];
    const list = document.getElementById('main-list');
    for(let value of initialListValues){
        let newListItem = createListItem(value);
        document.getElementById('main-list').append(newListItem);
    }
})();


// for(let i = 0; i < listItems.length; ++i){
//     const item = listItems[i];
    
//     item.addEventListener('click', function(e){
//         if(!e.target.classList.contains('line-through')){
//             for(let j = 0; j < listItems.length; ++j){
//                 if(listItems[j] === e.target){
//                     break;
//                 }
//                 if(!listItems[j].classList.contains('line-through')){
//                     return;
//                 }
//             }
//         }
        
//         e.target.classList.toggle('line-through');
//     });

// }