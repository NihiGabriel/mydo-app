let storage = {};

storage.CheckToken = () => {
    return localStorage.getItem('Token') ? true : false
}

storage.getToken = () => {
    return localStorage.getItem('Token')
}

storage.checkUserId = () => {
    return localStorage.getItem('userId') ? true : false
}

storage.getUserID = () => {
    return localStorage.getItem('userId')
}

storage.getConfig = () => {
    const config = {
        headers: {
            contentType: 'application/json'
        }
    }
}

storage.getConfigWithBearer = () => {
    const config = {
        headers: {
            contentType: 'Application/JSON',
            Authorization: `Bearer ${storage.getToken()}`
        }
    }
}

export default storage;