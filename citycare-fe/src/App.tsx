import React from "react";
import Button from "./Button";
import backgroundImage from "./assets/background.jpg";
import {FaEye, FaPaperPlane} from "react-icons/fa";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="app-container">
            <img
                src={backgroundImage}
                alt="sfondo"
                className="background-image"
            />
            <div className="centered-content">
                <Button label="Invia Segnalazione" icon={<FaPaperPlane/>}/>
                <Button label="Visualizza Segnalazioni" icon={<FaEye/>}/>
            </div>
        </div>
    );
};

export default App;
