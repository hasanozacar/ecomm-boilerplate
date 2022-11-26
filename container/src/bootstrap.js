import { mount } from 'products/ProductsIndex'
import { mount as CartMount } from 'carts/CardIndex'


mount(document.querySelector('#d-products'))
CartMount(document.querySelector('#dev-cart'))
