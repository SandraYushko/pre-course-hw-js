let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

console.log(passportWithAddress.address.city)
console.log(Object.assign({}, passportWithAddress, {address: Object.assign({}, passportWithAddress.address, { city: 'Bobryisk' })}))


