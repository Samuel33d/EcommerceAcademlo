export async function getInfo() {
    const BASE_URL = "https://ecommercebackend.fundamentos-29.repl.co/"

    try {
        const data = await fetch(BASE_URL)
        const res = await data.json()

        window.localStorage.setItem("products", JSON.stringify(res))
        
        return res
    } catch (err) {
        return err
    }


}

