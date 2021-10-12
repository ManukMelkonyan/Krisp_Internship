const getScrabbleScore = (word) => {
    const scores = [
        'aeioulnrst',
        'dg',
        'bcmp',
        'fhvwy',
        'k',
        'jx',
        'qz'
    ];
    let scoreSum = 0;
    for(let char of word){
        for(let i = 0; i < scores.length; ++i){
            let score = scores[i];
            if(score.includes(char)){
                scoreSum += i + 1;
                break;
            }
        }
    }

    return scoreSum;
};

console.log(getScrabbleScore('another')); // expected output: 10
console.log(getScrabbleScore('quick'));  // expected output: 17
