export function navScroll() {

    const header = document.querySelector("header")
    const navIconHead = document.querySelector("#icon--head")
    const navIconProducts = document.querySelector("#icon--products")

    window.addEventListener("scroll", function () {
        header.classList.toggle("nav--container--show", window.scrollY > 0)
        navIconProducts.classList.toggle("link__visited", window.scrollY > 520)

        navIconHead.classList.toggle("link__visited", window.scrollY < 580)
    })

}