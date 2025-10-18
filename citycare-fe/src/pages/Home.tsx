import React from "react";
import Button from "../Button";
import "../App.css";
import backgroundImage from "../assets/background.jpg";
import {FaEye, FaPaperPlane} from "react-icons/fa";

const Home: React.FC = () => {
    return (
        <div className="app-container">
            <img src={backgroundImage} alt="sfondo" className="background-image"/>
            <div className="centered-content">
                <Button label="Invia Segnalazione" icon={<FaPaperPlane/>} route="/create-report"/>
                <Button label="Visualizza Segnalazioni" icon={<FaEye/>} route="/reports-map"/>
            </div>
        </div>
    );
};

export default Home;
