import faker from "faker";



const mount = (el) => {
    const cartHtml = `<div> ${faker.random.number()}:  İtems </div>`

    el.innerHTML = cartHtml;
}

if(process.env.NODE_ENV==='development'){
    const exist = document.getElementById('dev-cart')
    if(exist){
        //running in isolation
        mount(exist);
    }
}

export { mount }