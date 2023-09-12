export function handleModal() {
    const closeModal = document.querySelector(".closeModal")
    const containerModal = document.querySelector(".container__modal")
    const productContent = document.querySelector(".content__products")
    const productP = document.querySelector("product__p")

    closeModal.addEventListener("click", function () {
        containerModal.classList.toggle("container__modal--show")
    })

    productContent.addEventListener("click", function (e) {
        if (e.target.classList.contains("product__p")) {
            containerModal.classList.toggle("container__modal--show")
        }

    })


}