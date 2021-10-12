const insert = (array, arrToInsert, start) => {
    const lastIndex = array.length - 1;
    for(let i = lastIndex + arrToInsert.length; i >= start + arrToInsert.length; --i){
        array[i] = array[i - arrToInsert.length];
    }
    for(let i = start; i < start + arrToInsert.length; ++i){
        array[i] = arrToInsert[i - start];
    }
};

const splice = (array, start, deleteCount = 0, ...items) => {
    const removedItems = [];
    if(start < 0){
        start = array.length + start;
        if(start < 0){
            start = 0;
        }
    }
    for(let i = start; i < start + deleteCount && i < array.length; ++i){
        removedItems.push(array[i]);
    }
    
    for(let i = start; i < array.length - deleteCount; ++i){
        array[i] = array[i + deleteCount];
    }
    for(let i = 0; i < deleteCount; ++i){
        array.pop();
    }
    insert(array, items, start);
    return removedItems;
};

// MDN examples as test cases

const months = ['Jan', 'March', 'April', 'June'];
console.log(splice(months, 1, 0, 'Feb')); // -> removed items will be empty - []
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

console.log(splice(months, 4, 1, 'May')); // -> removed items will be - ['June']
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
