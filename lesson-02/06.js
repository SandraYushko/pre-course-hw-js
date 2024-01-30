let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddressCopy = JSON.parse(JSON.stringify(passportWithAddress));
passportWithAddressCopy.address.city = 'Bobryisk';

console.log(passportWithAddressCopy.address.city)
console.log(passportWithAddress.address.city)



