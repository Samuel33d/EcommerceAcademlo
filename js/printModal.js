

export function printModal(db) {
    const containerModal = document.querySelector(".container__modal")
    const productContent = document.querySelector(".content__products")



    let html = ``

    productContent.addEventListener("click", function (e) {
        const index = Number(e.target.id)

        for (const product of db.products) {
            if (index === product.id) {

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
                    ${product.quantity ? `<i id="${product.id}" class="bx bx-plus"></i>`: ""}                    
                    </h3>
                    ${product.quantity ? `<span class="product__info--stock--modal">Stock: ${product.quantity}</span><i id="${product.id}"` : `<span class="product__soldOut">Sold Out</span>`}
                </div>
            </div>`
            }
        }

        containerModal.innerHTML = html
    })



}