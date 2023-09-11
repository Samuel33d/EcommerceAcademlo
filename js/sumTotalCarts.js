export function sumTotalCarts(db) {
    const numberItems = document.querySelector(".numberItems")
    const totalPrice = document.querySelector(".totalPrice")

    let totalProducts = 0;
    let amountProducts = 0;

    for (const product in db.cart) {
        const { amount, price } = db.cart[product]
        totalProducts += price * amount;
        amountProducts += amount
    }

    numberItems.textContent = amountProducts + " Items";
    totalPrice.textContent = "$" + totalProducts + ".00";

}