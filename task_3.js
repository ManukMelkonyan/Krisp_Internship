const filterByField = (users, field) => {
    let filteredUsers = users.filter((element) => element[field]);
    return filteredUsers;
};


const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        isAstronaut: true,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
    },
];
console.log(filterByField(users, "isAstronaut"));
// output:
// [
//     { username: "Yuri Gagarin",lang: "ru", isAstronaut: true, }, 
//     { username: "Nil Armstrong", lang: "ENG"}
// ];