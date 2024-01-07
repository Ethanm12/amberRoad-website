import React from "react";
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ label, propsClass, onClick, style }) => {
    const defaultClasses = "primary-button";
    const combinedClasses = `${defaultClasses} ${propsClass}`;

    return (
        <button className={combinedClasses} onClick={onClick} style={style}>
            {label}
        </button>
    );
};

export default Button;
