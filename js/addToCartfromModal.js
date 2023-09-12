import { printCart } from "./printCart.js"
import { sumTotalCarts } from "./sumTotalCarts.js"
import { cartAmount } from './cartAmount.js';

export function addToCartFromModal(db) {
    const productsHTML = document.querySelector(".container__modal")

    productsHTML.addEventListener("click", function (e) {
        if (e.target.classList.contains("bx-plus")) {
            const id = Number(e.target.id)

            const productFind = db.products.find((product) => product.id === id)

            if (db.cart[productFind.id]) {
                if (productFind.quantity === db.cart[productFind.id].amount) return alert('No tenemos más en stock')
                db.cart[productFind.id].amount++
                    ;
            } else {
                db.cart[productFind.id] = { ...productFind, amount: 1 };
            }

            window.localStorage.setItem("cart", JSON.stringify(db.cart))
            printCart(db)
            sumTotalCarts(db)
            cartAmount(db)
        }

    })
}