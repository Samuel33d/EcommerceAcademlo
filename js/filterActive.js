export function filterActive() {
    const items = document.querySelectorAll(".filter__products .filter");

    for (const item of items) {
        item.addEventListener("click", (e) => {
            for (const itemR of items) {
                itemR.classList.remove("filter__active");
            }

            e.currentTarget.classList.add("filter__active");
        });
    }
}