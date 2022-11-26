import faker from "faker";



const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const nameProduct = faker.commerce.productName();

        products += `<div>${nameProduct}</div>`;

    }


    el.innerHTML = products;
}

if(process.env.NODE_ENV==='development'){
    const exist =document.getElementById('d-products')

    if(exist){
         //running in isolation
        mount(exist);
    }
}

export { mount };