import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFields from '../components/InputFields';
import Swal from 'sweetalert2';
import PrivateRoute from "../components/PrivateRoute";
import { useAuth } from "../contexts/AuthenticationContext";

function LoginView(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate function
    const {login} = useAuth();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send request to login endpoint
            const response = await fetch('http://localhost:80/scholar-sphere/api/actions/login_action.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Login failed'); // Handle error response
            }

            // Assuming the response contains authentication token or user data
            const data = await response.json();

            // Store response data (e.g., authentication token) in local storage or application state
            // localStorage.setItem('token', data.token);
            // or store in application state using context or redux

            //TODO: Update authentication state
            login();

            // Redirect user to the home screen
            navigate('/home');

            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Login error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email or password',
            });

            // login();
            navigate('/home'); // TODO: Remove reroute to home
        }
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
