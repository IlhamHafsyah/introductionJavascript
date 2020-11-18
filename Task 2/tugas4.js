let data = {
    id: 1,
    name: "Leanne Graham",
    username: "bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenbrough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//a
let ganti = {
    name: "Mohammad Ilham Nurdhi Hafsyah",
    email: "ilhamhafsyah15@gmail.com",
    hobby: "Volleyball"
}
let gabung = {...data,...ganti}
console.log(gabung);

//b
let ambil;
({address} = data);
({street, city} = address)
console.log(street);
console.log(city);