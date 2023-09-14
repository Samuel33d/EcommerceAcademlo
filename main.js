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
import { filterActive } from "./js/filterActive.js";
import { printModal } from "./js/printModal.js";
import { handleModal } from "./js/handleModal.js";
import { addToCartFromModal } from "./js/addToCartfromModal.js";
import { handleScroll } from "./js/handleScroll.js"

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
    printModal(db)
    addToCartFromModal(db)
    handleModal()
    mixitupConfig()
    load()
    handleNav()
    handleBody()
    navScroll()
    handleCart()
    filterActive()
    handleScroll()
}


window.addEventListener("load", main)

