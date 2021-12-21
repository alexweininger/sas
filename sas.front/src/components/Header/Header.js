import { useIsAuthenticated } from "@azure/msal-react"
import SignInButton from "../SignInButton"
import SignOutButton from "../SignOutButton"
import { Container, Navbar } from "react-bootstrap"

const Header = () => {
    const isAuthenticated = useIsAuthenticated()

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="Logo"
                        src="https://sasfront.blob.core.windows.net/public/duke-logo.svg.png"
                        width="100"
                        height="45"
                    />
                </Navbar.Brand>
                {isAuthenticated ? <SignOutButton /> : <SignInButton />}
            </Container>
        </Navbar>
    )
}

export default Header
