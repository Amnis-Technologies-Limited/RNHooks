const url = 'https://jsonplaceholder.typicode.com/'

export const get = async (api, body, token) => {
    const response = await fetch(url + api, {
        method: 'get',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            // Authorization: "Bearer " + token,
        },
    })

    return await response.json()
}