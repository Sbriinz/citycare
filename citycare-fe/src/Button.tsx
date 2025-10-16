import React from "react";
import "./Button.css";

type ButtonProp = {
    label: string;
    icon?: React.ReactNode;
};


const Button = ({label, icon}: ButtonProp) => {
    return (
        <button className="custom-button">
            {label}
            {icon && <span className="button-icon">{icon}</span>}
        </button>
    );
};

export default Button;
