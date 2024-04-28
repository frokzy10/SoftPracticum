import React from 'react';
import photo from "../photos//404-removebg-preview.png"

const NotFoundPage = () => {
    return (
        <div style={{display:'flex',margin:'0 auto',justifyContent:'center'}}>
            <img src={photo} alt="img"/>
        </div>
    );
};

export default NotFoundPage;