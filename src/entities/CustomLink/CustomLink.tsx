import React from 'react';
import {useNavigate} from "react-router-dom";

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({href, children}) => {
    const navigate = useNavigate()
    const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const url = href;

        console.log("Пользователь перешел по ссылке!", url);

        if(url){
            navigate("/game/success")
        }
        window.open(href, '_blank');
    };

    return (
        <a style={{color:"yellow",fontFamily:"Nunito",textDecoration:"underline"}} href={href} onClick={handleLink}>
            {children}
        </a>
    );
};

export default CustomLink;
