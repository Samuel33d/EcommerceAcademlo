import { printCart } from "./printCart.js";
import { printProducts } from "./printProducts.js"
import { sumTotalCarts } from "./sumTotalCarts.js"

export function handleBtnBuy(db) {
    const btn__buy = document.querySelector(".content__total--btn")

    btn__buy.addEventListener("click", function () {
        if (!Object.values(db.cart).length) return alert("Selecciona un producto para comprar")

        let response = confirm("¿Seguro que quieres comprar?")
        if (!response) return

        const currentProducts = [];

        for (const product of db.products) {
            const productCart = db.cart[product.id]
            if (product.id === productCart?.id) {
                currentProducts.push({
                    ...product,
                    quantity: product.quantity - productCart.amount
                })
            } else {
                currentProducts.push(product)
            }
        }
        db.products = currentProducts;
        db.cart = {}


        window.localStorage.setItem("products", JSON.stringify(db.products))
        window.localStorage.setItem("cart", JSON.stringify(db.cart))
        window.location.reload()

        sumTotalCarts(db)
        printProducts(db)
        printCart(db)

    })
}