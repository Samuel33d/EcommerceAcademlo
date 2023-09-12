import { printCart } from "./printCart.js";
import { printProducts } from "./printProducts.js";
import { sumTotalCarts } from "./sumTotalCarts.js";
import { cartAmount } from './cartAmount.js';

export function handleProductsCart(db) {
    const contentCart__products = document.querySelector(".contentCart__products")

    contentCart__products.addEventListener("click", function (e) {
        if (e.target.classList.contains("bx-minus")) {
            const id = Number(e.target.parentElement.id)
            if (db.cart[id].amount === 1) {
                const response = confirm("¿Seguro que quieres eliminar?")
                if (!response) return

                delete db.cart[id];


            } else {
                db.cart[id].amount--;
            }
        };
        if (e.target.classList.contains("bx-plus")) {
            const id = Number(e.target.parentElement.id)

            const productFind = db.products.find((product) => product.id === id)

            if (db.cart[productFind.id]) {
                if (productFind.quantity === db.cart[productFind.id].amount) return alert("No tenemos más en stock :(")
                db.cart[id].amount++;
            }

        };
        if (e.target.classList.contains("bx-trash-alt")) {
            const id = Number(e.target.parentElement.id)
            confirm("¿Seguro que quieres eliminar?")
            delete db.cart[id]
        };
        window.localStorage.setItem("cart", JSON.stringify(db.cart))

        printCart(db)
        printProducts(db)
        cartAmount(db)
        sumTotalCarts(db)
    })
}