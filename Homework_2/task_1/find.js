const find = (array, callbackFn, thisArg) => {
    for(let i = 0; i < array.length; ++i){
        const element = array[i];
        if(callbackFn.call(thisArg, element, i, array)){
            return element;
        }
    }
    return undefined;
};

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];

function isCherries(fruit) {
    return fruit.name === 'cherries';
  }
  
  console.log(find(inventory, isCherries));
  // { name: 'cherries', quantity: 5 }
  