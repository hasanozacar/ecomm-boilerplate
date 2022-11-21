import faker from "faker";

const cartHtml = `<div> ${faker.random.number()}:  İtems </div>`

document.querySelector('#dev-cart').innerHTML = cartHtml;
