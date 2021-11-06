const getAllValuesOfTree1 = (tree) => {
    if(!tree){
        return [];
    }
    return [tree.value, ...getAllValuesOfTree1(tree.next)];
}

function getAllValuesOfTree2 (tree){
    const values = [];
    function innerCallback(t){
        if(!t){
            return values;
        }
        values.push(t.value);
        return innerCallback(t.next);
    }
    return (innerCallback(tree));
}


const tree = {
    value: 12,
    next: {
        value: 20,
        next: {
            value: 30,
            next: {
                value: -10,
                next: null
            }
        }
    }
};

console.log(getAllValuesOfTree1(tree));
console.log(getAllValuesOfTree2(tree));