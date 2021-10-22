
function bind(fn, thisArg, ...args){
    const boundFunction = function(...args){
        if(args === undefined){
            args = [];
        }

        if(thisArg === null){
            return fn(...args);
        }

        const fKey = Symbol();
        thisArg[fKey] = fn;
        const res = thisArg[fKey](...args);
        delete thisArg[fKey];
        return res;
    }
    return boundFunction;
}