import React from 'react';

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
    onLinkClick?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({href, children, onLinkClick}) => {
    const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const url = href;

        console.log("Пользователь перешел по ссылке!", url);

        if (onLinkClick) {
            onLinkClick();
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
