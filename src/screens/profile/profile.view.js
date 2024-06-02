import React from "react";
import { useLocation } from "react-router-dom";

function Profile(){
    const location = useLocation();
    const {name} = location.state || {};
    
    return(
        <div>
            <h1>Profile</h1>
            <h2>Welcome {name}</h2>
        </div>
    )
}

export default Profile;