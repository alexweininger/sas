import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react'

import PageLayout from '../PageLayout'
import LandingPage from '../LandingPage'
import StorageAccountsPage from '../StorageAccountsPage'

import './App.css'

function App() {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/storage' element={<StorageAccountsPage />} />
          </Routes>
        </BrowserRouter>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in!  Please sign in.</p>
      </UnauthenticatedTemplate>
    </PageLayout>
  )
}

export default App