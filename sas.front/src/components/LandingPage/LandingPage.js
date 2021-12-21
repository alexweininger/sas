import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import WhatCanIDo from "../WhatCanIDo"
import HowToGainAccess from "../HowToGainAccess"

const LandingPage = () => {
    return (
        <>
            <div style={{margin: '10px'}}>
                <Button variant="warning">
                    <Link to="/storage">Storage Accounts</Link>
                </Button>
            </div>
            <WhatCanIDo />
            <HowToGainAccess />
        </>
    )
}

export default LandingPage
