export function handleScroll() {
    window.sr = ScrollReveal();

    sr.reveal(".nav--container", {
        duration: 2500,
        origin: "top",
        distance: "20px",
    })

    sr.reveal(".content__head--img", {
        duration: 2500,
        origin: "top",
        distance: "20px",
    })

    sr.reveal(".product", {
        duration: 1000,
        origin: "bottom",
        distance: "20px",
    })


}