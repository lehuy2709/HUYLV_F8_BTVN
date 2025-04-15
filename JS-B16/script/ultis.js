const baseUrl = 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com'


const getPosts = async (endpoint, accessToken) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + accessToken }
    })
    return await response.json()
}

const postLogin = async (data, endpoint) => {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    )
    return await response.json()
}
export { postLogin, getPosts }