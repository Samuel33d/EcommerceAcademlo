export function handleCart() {
    const cart = document.querySelector(".container__cart")
    const navIcon = document.querySelector(".bx-shopping-bag")
    const navIconX = document.querySelector(".bx-x")

    navIcon.addEventListener("click", function () {
        cart.classList.add("container__cart--show")


    })

    navIconX.addEventListener("click", function () {
        cart.classList.remove("container__cart--show")
    })
}