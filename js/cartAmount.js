export function cartAmount(db) {
    const cartAmount = document.querySelector(".cart__amount")

    let amount = 0;

    for (const product in db.cart) {
        amount += db.cart[product].amount
    }


    cartAmount.textContent = amount
}