const toAcronym = (longPhrase) => {
    let res = longPhrase.split(' ').reduce(
        (acc, current) => {
            return acc += current[0].toUpperCase();
        }, '')
    return res;
};

console.log(toAcronym('Prisoner of War')); // -> ‘POW’
console.log(toAcronym('Have a good night')); // -> ‘HAGN’