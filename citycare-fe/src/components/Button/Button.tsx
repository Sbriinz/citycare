import React from "react";
import "./Button.css";
import "../../pages/Home"
import {useNavigate} from "react-router-dom";


type ButtonProp = {
    label: string;
    icon?: React.ReactNode;
    route?: string;
};

const Button = ({label, icon, route}: ButtonProp) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (route) navigate(route);
    };

    return (
        <button className="custom-button" onClick={handleClick}>
            {label}
            {icon && <span className="button-icon">{icon}</span>}
        </button>
    );
};

export default Button;
