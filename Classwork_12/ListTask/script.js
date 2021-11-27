const listItems = document.getElementById('main-list').children;
const allButtons = document.getElementsByTagName('button');

for(let i = 0; i < listItems.length; ++i){
    const item = listItems[i];
    
    item.addEventListener('click', function(e){
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

}
