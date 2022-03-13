import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/form";
import './styles.css';

const LoginPage = () => {
    return (
        <div className="container">
        <div className="sub-container">
           <div className="highright-wrapper">
            <h1>Login to our platform</h1>
           </div>
           <div className="form-wrapper"> 
                <LoginForm />
           </div>
            </div>
        </div>
    )
}

export default LoginPage