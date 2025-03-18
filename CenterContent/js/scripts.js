const users = [
    {name: "Bilal", role: "admin"},
    {name: "Ali", role: "user"},
    {name: "Ayesha", role: "admin"},
    {name: "Sara", role: "user"}
];

const groupedUsers = Map.groupBy(users, user => user.role);

console.log(groupedUsers);