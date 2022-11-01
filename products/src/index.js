import faker from "faker";

let products = '';

for (let i = 0; i < 3; i++) {
const nameProduct = faker.commerce.productName();

products=`<div>${nameProduct}</div>`;

}

console.log(products);