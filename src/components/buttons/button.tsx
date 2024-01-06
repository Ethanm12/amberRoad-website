 import React from "react";
 import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ label, onClick, style }) => {
    return (
        <button className="primary-button" onClick={onClick} style={style}>
            {label}
        </button>
    );
};

export default Button;
