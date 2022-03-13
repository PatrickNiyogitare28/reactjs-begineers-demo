import React from "react";
import './styles.css';

const Button = ({label, onClick}) => {
    return (
        <div className="counter-button"> 
        <button onClick={() => onClick()}> {label} </button>
        </div>
    )
}

export default Button;