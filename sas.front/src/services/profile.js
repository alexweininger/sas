import URLS from '../config/urls'

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function getMyProfile(accessToken) {
    const headers = new Headers()
    const bearer = `Bearer ${accessToken}`

    headers.append("Authorization", bearer)

    const options = {
        method: "GET",
        headers: headers
    }

    const endpoint = URLS.graphMe.endpoint

    return fetch(endpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error))
}
