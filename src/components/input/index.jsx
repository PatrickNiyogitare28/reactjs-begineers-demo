import React from "react";
import './styles.css';

const Input = ({placeholder, type}) => {
    return (
        <input placeholder={placeholder} type={type} />
    )
}

export default Input;