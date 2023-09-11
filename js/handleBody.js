

export function handleBody() {
    const navIcon = document.querySelector("#icon--theme")
    const body = document.querySelector("body")

    navIcon.addEventListener("click", function () {
        navIcon.classList.toggle("bx-sun")


        body.classList.toggle("dark-theme")
    })
}