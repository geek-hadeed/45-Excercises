/* They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items. */

interface item {
    name: string
    price: number
} 

let YBR_Bike: item ={

    name: "Yamaha_125",
    price: 466000
}

let CD_Bike: item ={

    name: "Honda_125",
    price:  234900
}

console.log(` Bike I Love: ${YBR_Bike.name} , ${YBR_Bike.price} `)
console.log(` Bike I Just Like: ${CD_Bike.name} , ${CD_Bike.price} `)


