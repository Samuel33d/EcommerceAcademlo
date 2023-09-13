export function filterActive() {
    const items = document.querySelector(".filter__products");

    items.addEventListener("click", function (e) {
        if (e.target.classList.contains("filter")) {
            filter.classList.toggle("filter__active")
        }
    })
}
