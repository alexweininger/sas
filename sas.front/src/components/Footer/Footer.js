const Footer = () => {
    console.log('here');
    return (
        <section className="footer-area footer-dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="footer-logo text-center">
                            <a className="mt-30" href="index.html">
                                <img src="https://sasfront.blob.core.windows.net/public/duke-logo-white.svg.png" width="150" alt="60" id="logoFooter" />
                            </a>
                        </div>
                        <div className="footer-support text-center">
                            <span className="number">+8801234567890</span>
                            <span className="mail">support@uideck.com</span>
                        </div>
                        <div className="copyright text-center mt-35">
                            <p className="text">&copy; <span id="year">{new Date().getFullYear()}</span> - All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
