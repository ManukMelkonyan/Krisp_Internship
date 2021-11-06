function abacabaPattern(number){
    if (number === 0){
        return '';
    }
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const previous = abacabaPattern(number - 1);
    const center = letters[number - 1];
    return previous + center + previous;
}


console.log(abacabaPattern(1));
console.log(abacabaPattern(2));
console.log(abacabaPattern(3));
console.log(abacabaPattern(4));
console.log(abacabaPattern(5));