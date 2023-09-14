

export function handleBody() {
    const navIcon = document.querySelector("#icon--theme")
    const body = document.querySelector("body")

    navIcon.addEventListener("click", function () {
        navIcon.classList.toggle("bx-sun")
        body.classList.toggle("dark-theme")



        if (document.body.classList.contains("dark-theme")) {
            window.localStorage.setItem("dark-mode", "true")
        } else {
            window.localStorage.setItem("dark-mode", "false")
        }
    })


    if (window.localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-theme")
    } else {
        document.body.classList.remove("dark-theme")
        navIcon.classList.remove("bx-sun")
    }
}



