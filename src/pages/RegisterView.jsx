import DropDownInput from "../components/DropDownInput";
import InputFields from "../components/InputFields";
import OptionSelection from "../components/OptionSelection";
import React, {useEffect, useState} from 'react';
import { useProgramData } from "../contexts/ProgramContext";
import { useRoleData } from "../contexts/RoleContext";
import { useInterestData } from "../contexts/InterestContext";

import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function RegisterView(){

    const [email, setEmail] = useState();
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [dob, setDob] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmpassword] = useState();
    const [role, setRole] = useState();
    const [program, setProgram] = useState();
    const [interest, setInterest] = useState([]);

    const{ programData, fetchProgram} = useProgramData();
    const {roleData, fetchRole} = useRoleData();
    const { interestData, fetchInterest} = useInterestData();

    const navigate = useNavigate();

    useEffect(()=>{
        fetchProgram();
        fetchRole();
        fetchInterest();
    }, []);

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordPattern.test(password);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleFnameChange = (e) => {
        setFname(e.target.value);
    }

    const handleLnameChange = (e) => {
        setLname(e.target.value);
    }

    const handleDateChange = (e) => {
        setDob(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmpasswordChange = (e) => {
        setConfirmpassword(e.target.value);
    }

    const handleRoleChange = (rolePick) => {
        setRole(rolePick);
    }

    const handleProgramchange = (programPick) => {
        setProgram(programPick);
    }

    const handleInterestChange = (selection) => {
        
        console.log(interest);
        const value = selection;

        if(interest.includes(value)){
            console.log("not inserting")
            setInterest(interest.filter(option => option !== value));
        }
        else {
            console.log("inserting")
            setInterest(interest => [...interest, value]);
        }
    }

    const handleFormSubmission = async (e) => {
        e.preventDefault();
    
        // Perform input validation
        if (
            !email ||
            !fname ||
            !lname ||
            !dob ||
            !password ||
            !confirmPassword ||
            !role ||
            !program ||
            interest.length === 0
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error!',
                text: 'All fields are required.',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error!',
                text: 'Passwords do not match.',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        if (!validatePassword(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error!',
                text: 'Password must contain at least one number, one symbol, one lowercase letter, one uppercase letter, and be at least 8 characters long.',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error!',
                text: 'Invalid email format.',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        // Check if the email ends with "@ashesi.edu.gh"
        if (!email.endsWith('@ashesi.edu.gh')) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error!',
                text: 'Email must end with @ashesi.edu.gh.',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        // Prepare the data object to be sent in the POST request
        const formData = {
            email,
            fname,
            lname,
            dob,
            password,
            'confirm-password': confirmPassword,
            role,
            program,
            interest
        };
    
        try {
            // Make a POST request to the endpoint with the form data
            const response = await fetch('http://localhost:80/scholar-sphere/actions/register_action.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            // Parse the response JSON
            const data = await response.json();
    
            // Handle the response based on success or failure
            if (response.ok) {
                console.log('User registered successfully:', data);
    
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: 'You have successfully registered.',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/home');
                }).then(() => {
                    // Clear the form fields upon successful registration
                    setConfirmpassword('');
                    setDob('');
                    setEmail('');
                    setFname('');
                    setInterest([]);
                    setLname('');
                    setPassword('');
                    setProgram('');
                    setRole('');
                });
            } else {
                console.error('Error registering user:', data.message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
    

    return(
        <form className="all-form" onSubmit={handleFormSubmission}>
            <p className="register-title">Create an account</p>
            <div className="main-container-2">
                <div className="part-one">
                    <InputFields label="Email" type="email" placeholders="abc@ashesi.edu.gh" val={email} action={handleEmailChange}/>
                    <InputFields label="First Name" type="text" placeholders="first name" val={fname} action={handleFnameChange}/>
                    <InputFields label="Last Name" type="text" placeholders="last name" val={lname} action={handleLnameChange}/>
                    <InputFields label="Date of birth" type="date"placeholders="" val={dob} action={handleDateChange}/>
                    <InputFields label="Password" type="password" placeholders="password" val={password} action={handlePasswordChange}/>
                </div>
                <div className="part-two">
                    <InputFields label="Confirm Password" type="password" placeholders="confirm password" val={confirmPassword} action={handleConfirmpasswordChange}/>
                    <DropDownInput title="Role" options={roleData} onChange={handleRoleChange} />
                    <DropDownInput title="Program" options={programData} onChange={handleProgramchange} />
                    <OptionSelection options={interestData} onChange={handleInterestChange} />      
                </div>
            </div>
            <input style={{cursor: 'pointer'}} className="submit-btn" type="submit" value='Register'/>
        </form>
    );
}

export default RegisterView