import { handleProductsCart } from "./handleProductsCart.js";

export function printModal(db) {
    const containerModal = document.querySelector(".container__modal")


    let html = ``

    for (const product of db.products) {
        html = ` <div class="modal__product">
            <i class="bx bxs-x-circle closeModal"></i>
            <div class="modal__product--img">
                <img src="${product.image}" alt=""></img>
            </div>
            <h3 class="modal__product--name">
                ${product.name} - <span>${product.category}</span>
            </h3>
            <p class="modal__product--p">
                ${product.description}
            </p>
            <div class="modal__product--info">
                <h3>$${product.price}.00
                <i id="${product.id}" class="bx bx-plus"></i>
                </h3>
                ${product.quantity ? `<span class="product__info--stock--modal">Stock: ${product.quantity}</span><i id="${product.id}"` : `<span class="product__soldOut">Sold Out</span>`}
            </div>
        </div>`

    }

    handleProductsCart(db)
    
    containerModal.innerHTML = html
}