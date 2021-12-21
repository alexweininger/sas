import React from "react"

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = ({ profile }) => {
    return (
        <div id="profile-div">
            <p><strong>First Name: </strong> {profile.givenName}</p>
            <p><strong>Last Name: </strong> {profile.surname}</p>
            <p><strong>Email: </strong> {profile.mail}</p>
            <p><strong>Id: </strong> {profile.id}</p>
        </div>
    )
}
