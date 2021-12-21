import URLS from '../config/urls'


/**
 * Returns the list of storage accounts
 */
export const getStorageAccounts = async accessToken => {
    const options = getOptions('GET', accessToken)
    const endpoint = URLS.storageAccounts.endpoint

    return fetch(endpoint, options)
        .then(response => {
            return ["adlfredgohsman"]
            return response.json()
        })
        .catch(error => console.log(error))
}


/**
 * Create the options object to pass to the API call
 */
 const getOptions = (method, accessToken) => {
    const headers = new Headers()
    headers.append('Authorization', `Bearer ${accessToken}`)

    const options = {
        method: 'GET',
        //headers: headers
    }

    return options
}
