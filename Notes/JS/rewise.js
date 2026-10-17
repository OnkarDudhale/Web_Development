let cars = [{
    name: "lambourgini urus",
    price: 50000000,
    description: "Two seater ,stylish,rich",
    category: "suv"
}, {
    name: "mercedez benz",
    price: 20000000,
    description: "Stylish,Rich",
    category: "car"
}]

const car = cars.map(car => {
    return car.name, car.category;
})

console.log(car)

