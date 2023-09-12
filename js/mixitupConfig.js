export function mixitupConfig() {
    mixitup(".products", {
        selectors: {
            target: '.product'
        },
        animation: {
            duration: 300
        }
    });
}