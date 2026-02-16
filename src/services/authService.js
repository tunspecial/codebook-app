
export const logIn = async (authDetails) => {

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(authDetails)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions)

    if (!response.ok) {
        throw { message: response.statusText, status: response.status } //eslint-disable-line
    }

    const data = await response.json()

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
        sessionStorage.setItem("user", JSON.stringify(data.user))
    }

    return data
}


export const regiter = async (authDetails) => {

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(authDetails)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions)

    if (!response.ok) {
        throw { message: response.statusText, status: response.status } //eslint-disable-line
    }

    const data = await response.json()

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
        sessionStorage.setItem("user", JSON.stringify(data.user))
    }

    return data

}

export const logOut = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("cbid")
    sessionStorage.removeItem("user")
}