export const getProducts = () => {
    return fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        return response.json()
    })
}
