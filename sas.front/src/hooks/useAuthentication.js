import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react'
import { loginRequest } from '../config/authConfig'

const useAuthentication = () => {
    const { instance, accounts } = useMsal()
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const request = { ...loginRequest, account: accounts[0] }
        const storageRequest = { ...request, scopes: ['https://storage.azure.com/user_impersonation'] }

        const getAuthToken = async () => {
            // Retrieve the Storage Account Token
            try {
                const silentResponse = await instance.acquireTokenSilent(storageRequest)
                setAuth(silentResponse)
            } catch (e) {
                const popupResponse = await instance.acquireTokenPopup(storageRequest)
                setAuth(popupResponse)
            }
        }

        getAuthToken()

    }, [accounts, instance]);

    return { account: accounts[0], auth };
}

export { useAuthentication }