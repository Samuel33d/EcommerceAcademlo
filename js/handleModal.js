import { handleProductsCart } from "./handleProductsCart.js";

export function handleModal(db) {
    const closeModal = document.querySelector(".closeModal")
    const containerModal = document.querySelector(".container__modal")
    const productContent = document.querySelector(".content__products")


    closeModal.addEventListener("click", function () {
        containerModal.classList.toggle("container__modal--show")
    })

    productContent.addEventListener("click", function (e) {
        if (e.target.classList.contains("product__p")) {
            containerModal.classList.toggle("container__modal--show")
        }

    })

    handleProductsCart(db)


}