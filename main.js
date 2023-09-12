import { load } from "./js/load.js";
import { getInfo } from "./js/getInfo.js";
import { printProducts } from "./js/printProducts.js";
import { handleNav } from "./js/handleNav.js";
import { handleBody } from "./js/handleBody.js";
import { navScroll } from "./js/navScroll.js";
import { handleCart } from "./js/handleCart.js";
import { addToCartFromProducts } from "./js/addToCartFromProducts.js";
import { printCart } from "./js/printCart.js";
import { handleProductsCart } from "./js/handleProductsCart.js";
import { sumTotalCarts } from "./js/sumTotalCarts.js";
import { handleBtnBuy } from "./js/handleBtnBuy.js";
import { cartAmount } from "./js/cartAmount.js";
import { mixitupConfig } from "./js/mixitupConfig.js";

async function main() {

    const db = {
        products: JSON.parse(window.localStorage.getItem("products")) || (await getInfo()),
        cart: JSON.parse(window.localStorage.getItem("cart")) || {}
    }



    getInfo(db)
    printProducts(db)
    addToCartFromProducts(db)
    printCart(db)
    handleProductsCart(db)
    sumTotalCarts(db)
    handleBtnBuy(db)
    cartAmount(db)
    mixitupConfig()
    load()
    handleNav()
    handleBody()
    navScroll()
    handleCart()
}


window.addEventListener("load", main)

