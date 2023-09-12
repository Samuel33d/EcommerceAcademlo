export async function printProducts(db) {
    const productsHTML = document.querySelector(".products")

    let html = ``

    for (const product of db.products) {
        html += `<div class="product ${product.category}">
        <div class="product__img">
        <img src="${product.image}"></img>
        </div>
        <div class="product__info">
        <h3>$${product.price}.00
        ${product.quantity ? `<span class="product__info--stock">Stock: ${product.quantity}</span><i id="${product.id}" class="bx bx-plus"></i>` : `<span class="product__soldOut">Sold Out</span>`}
        </h3>
        <p class="product__p">${product.name}</p>
        </div>
        
    </div>`

    }



    productsHTML.innerHTML = html
}