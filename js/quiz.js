//how to get sokina instagram from dreamGirl?

/*const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];
const sokinaInstagram = dreamGirl[0].sokina.contactInfo[1].instagram;
console.log(sokinaInstagram);*/
//can you get the phone which price not 500 ? which one is correct?

const phones = [
 { name: "sony", price: 500 },
 { name: "apple", price: 700 },
 { name: "sony", price: 700 },
];
const salary = phones.filter((phone) => phone.price != 500);
console.log(salary);

