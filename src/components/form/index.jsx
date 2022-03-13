import React from "react";
import Input from "../input";
import './styles.css';

const LoginForm = () => {
    return (
        <div className="form-container">
            <Input placeholder="Username" type="text" />
            <Input placeholder="Password" type="password" />
            <button>LOGIN</button>
        </div>
    )
}

export default LoginForm;