import { useIsAuthenticated } from "@azure/msal-react"
import SignInButton from "../SignInButton"
import SignOutButton from "../SignOutButton"
import { Container, Navbar } from "react-bootstrap"

const Header2 = () => {
    const isAuthenticated = useIsAuthenticated()

    return (
        <section className="navbar-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">

                            <a className="navbar-brand" href="#">
                                <img src="https://sasfront.blob.core.windows.net/public/duke-logo.svg.png" width="100" height="45" alt="Logo" id="logo" />
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarTwo">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item active"><a className="page-scroll" href="#home">Home</a></li>
                                    <li className="nav-item"><a className="page-scroll" href="#whatcanido">What can I do?</a></li>
                                    <li className="nav-item"><a className="page-scroll" href="#howtogainaccess">How to gain access?</a></li>
                                    <li className="nav-item"><a className="page-scroll" href="#support">Support</a></li>
                                </ul>
                            </div>

                            <div className="navbar-btn d-none d-sm-inline-block">
                                <ul>
                                    <li><a className="solid" href="#">Log in</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header2
