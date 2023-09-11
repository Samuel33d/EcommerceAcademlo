export function printCart(db) {
    const productsCart = document.querySelector(".contentCart__products")

    let html = ``
    for (const product in db.cart) {
        const { quantity, price, name, image, id, amount } = db.cart[product]

        html += `<div class="contentCart__product">
            <div class="contentCart__product--img" >
                <img src="${image}" alt="imagen"></img>
            </div>
            <div class="contentCart__product--body">
                <h4>${name}</h4>
                <p>Stock: ${quantity} | <span>$${price}.00</span> 
                <p id ="subtotal">Subtotal: $${amount * price}.00</p>
                </p>

                <div class="contentCart__product--body-op" id="${id}">
                    <i class="bx bx-minus"></i>
                    <span>${amount} unit</span>
                    <i class="bx bx-plus"></i>
                    <i class="bx bx-trash-alt"></i>
                </div>
            </div>
        </div>`
    }

    productsCart.innerHTML = html
}