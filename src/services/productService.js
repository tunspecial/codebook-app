
export const getProductList = async (searchTerm) => {

    const respond = await fetch(`${process.env.REACT_APP_HOST}/products/444/products?name_like=${searchTerm ? searchTerm : ""}`)

    if (!respond.ok) {
        throw { message: respond.statusText, status: respond.status } //eslint-disable-line
    }

    const data = await respond.json()

    return data
}


export const getProduct = async (id) => {

    const respond = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`)

    if (!respond.ok) {
        throw { message: respond.statusText, status: respond.status } //eslint-disable-line
    }

    const data = await respond.json()

    return data
}

export const getFeatureList = async () => {

    const respond = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`)

    if (!respond.ok) {
        throw { message: respond.statusText, status: respond.status } //eslint-disable-line
    }
    const data = await respond.json()

    return data
}