import React from 'react';
import {useLocation} from "react-router-dom";

const ProfilePage = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div style={{color:"white"}}>
            {location.state}
        </div>
    );
};

export default ProfilePage;