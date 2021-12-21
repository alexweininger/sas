import React from "react"
import Header from "../Header"
import Footer from "../Footer"

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = ({ children }) => {
    return (
        <>
            <Header />
            <h5><center>Welcome to the Storage Account Manager</center></h5>
            <br />
            <br />
            {children}
            <Footer />
        </>
    )
}
