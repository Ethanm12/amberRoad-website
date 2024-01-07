import React from "react";
import { ButtonProps } from './types'; 

const MiscButton: React.FC<ButtonProps> = ({ label, propsClass, onClick, style }) => {
    const defaultClasses = "misc-button";
    const combinedClasses = `${defaultClasses} ${propsClass}`;

    return (
        <>
        <button className={combinedClasses} onClick={onClick} style={style}>
            {label}
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </>
    );
};

export default MiscButton;