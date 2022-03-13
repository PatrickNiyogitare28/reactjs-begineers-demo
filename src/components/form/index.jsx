import React from "react";
import { Link } from "react-router-dom";
import Input from "../input";
import './styles.css';

const LoginForm = () => {
    return (
        <div className="form-container">
            <Input placeholder="Username" type="text" />
            <Input placeholder="Password" type="password" />
            <Link to="/counter">
            <button>LOGIN</button>
            </Link>
        </div>
    )
}

export default LoginForm;