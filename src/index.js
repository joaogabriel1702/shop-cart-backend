import createItem from './services/item.js'
import * as cartService from './services/cart.js'

const cart = []
const whishList = []

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels Lamborghini", 39.99, 3);

await cartService.addItem(cart, item1)
await cartService.addItem(whishList, item2)

await cartService.deleteItem(cart, item1.name)

console.log("Shopee Cart TOTAL IS:")
await cartService.calculateTotal(cart)
