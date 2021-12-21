import React, { useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"
import Button from "react-bootstrap/Button"
import ProfileData from "../ProfileData";
import { getMyProfile } from "../../services/profile";

export const ProfileContent = () => {
    const { account, auth } = useAuthentication()
    const [profile, setProfile] = useState(null)

    const name = account && account.name

    const handleRequestProfile = () => {
        getMyProfile(auth.accessToken)
            .then(response => setProfile(response))
    }

    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {profile ?
                <ProfileData profile={profile} />
                :
                <Button variant="secondary" onClick={handleRequestProfile}>Request Profile Information</Button>
            }
        </>
    )
}
