

export function handleNav() {
    const navIcon = document.querySelector(".handleIconNavbar")
    const navMenu = document.querySelector(".nav--menu")
    const navIconHead = document.querySelector("#icon--head")
    const navIconProducts = document.querySelector("#icon--products")

    function toggleNavIcons() {
        navIcon.classList.toggle("bxs-dashboard")
        navIcon.classList.toggle("bx-x")
    }

    navIcon.addEventListener("click", function () {
        navMenu.classList.toggle("nav--menu--show")

        if (navIcon.classList.contains("handleIconNavbar")) {
            toggleNavIcons()
        }
    })

    navIconProducts.addEventListener("click", function () {
        navIconProducts.classList.add("link__visited")
        navIconHead.classList.remove("link__visited")
        navMenu.classList.toggle("nav--menu--show")
        navIcon.classList.toggle("bxs-dashboard")
        navIcon.classList.remove("bx-x")

    })

    navIconHead.addEventListener("click", function () {
        navIconProducts.classList.remove("link__visited")
        navIconHead.classList.add("link__visited")
        navMenu.classList.toggle("nav--menu--show")
        navIcon.classList.toggle("bxs-dashboard")
        navIcon.classList.remove("bx-x")
    })

}