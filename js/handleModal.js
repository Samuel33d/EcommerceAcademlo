import { printModal } from "./printModal.js";


export function handleModal(db) {
    const containerModal = document.querySelector(".container__modal")
    const productContent = document.querySelector(".content__products")



    productContent.addEventListener("click", function (e) {
        if (e.target.classList.contains("showModalProduct")) {
            containerModal.classList.toggle("container__modal--show")

            printModal(db)

            const closeModal = document.querySelector(".closeModal")

            closeModal.addEventListener("click", function () {
                containerModal.classList.toggle("container__modal--show")
            }
            )
        }
    })

    printModal(db)
}