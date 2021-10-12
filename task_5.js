const getAverageAge = (users) => {
    let avg = users.reduce(
        (acc, current, index) => {
            acc.ageSum += current.age;
            acc.count++;
            if(index === users.length - 1){
                return acc.ageSum / acc.count;
            }
            else{
                return acc;
            }
        }, { ageSum: 0, count: 0, });
    
    return avg;
};

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];
console.log(getAverageAge(users)); // expected output: 55