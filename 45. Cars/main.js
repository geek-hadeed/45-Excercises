/* Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */
function make_car(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
        ...Object.assign({}, ...options)
    };
    return car;
}
console.log(make_car("Toyota", "Supra", { color: "red" }, { features: ["Navigation", "Nitro"] }));
console.log(make_car("Changan", "Alsvin"));
console.log(make_car("Toyota", "Revo"));
export {};
