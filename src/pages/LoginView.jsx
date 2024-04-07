import React, { useState } from "react";
import axios from 'axios';
import InputFields from '../components/InputFields';


function LoginView(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send request to login endpoint
        // const response = await axios.post('', {
        //     email,
        //     password
        // });

        // reset after submission
        setEmail('');
        setPassword('');
    }

    return(
        <div className="main-container">
            <div className="image-container"></div>
            <div className="form-container">
                <div className="login-title" >
                    <p className="big">Welcome,</p>
                    <p className="small">Please login</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <InputFields label='Email' type='text' val={email} placeholders='abc@ashesi.edu.gh' action={handleEmailChange} />
                        <InputFields label='Password' type='password' val={password} placeholders='password' action={handlePasswordChange} />
                        <p>Minimum of 8 characters with a capital letter and a symbol and number</p>
                        <input style={{cursor: 'pointer'}} className="submit-btn" type="submit" value={'Login'} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginView;