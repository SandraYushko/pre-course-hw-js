let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};


let newPassport = Object.assign({},
                                 passportWithAddress,
                          {address: Object.assign({}, passportWithAddress.address, { city: 'Bobryisk' })
});

console.log(passportWithAddress.address.city)
console.log(newPassport.address.city)


