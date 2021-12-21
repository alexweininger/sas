import URLS from '../config/urls'
import { BlobServiceClient } from '@azure/storage-blob'
import { InteractiveBrowserCredential } from '@azure/identity'


/**
 * Returns the list of folders for the azure datalake storage account
 */
export const getContainers = async (storageAccountId) => {
    const endpoint = URLS.fileSystems.endpoint.replace('{name}', storageAccountId)
    const credential = new InteractiveBrowserCredential({
        tenantId: process.env.REACT_APP_TENANT_ID,
        clientId: process.env.REACT_APP_CLIENT_ID
    })
    const blobServiceClient = new BlobServiceClient(endpoint, credential)

    return blobServiceClient.listContainers()
}
