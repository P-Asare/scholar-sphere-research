import DropDownInput from "../components/DropDownInput";
import InputFields from "../components/InputFields";
import OptionSelection from "../components/OptionSelection";
import React, {useState} from 'react';

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

    const handleFormSubmission = (e) => {

        e.preventDefault();

        console.log('working');

        // TODO: Make POST request to submit form details
        // FIXME: Fix clearance on submission of form

        setConfirmpassword('');
        setDob('');
        setEmail('');
        setFname('');
        setInterest('');
        setLname('');
        setPassword('');
        setProgram('');
        setRole('');
    }

    const roleList = {
        "1":"Student",
        "2": "Teacher",
        "3":"Student",
        "4": "Teacher",
        "5":"Student",
        "6": "Teacher",
        "7":"Student",
        "8": "Teacher",
    }



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
                    <DropDownInput title="Role" options={roleList} onChange={handleRoleChange} />
                    <DropDownInput title="Program" options={roleList} onChange={handleProgramchange} />
                    <OptionSelection options={roleList} onChange={handleInterestChange} />      
                </div>
            </div>
            <input style={{cursor: 'pointer'}} className="submit-btn" type="submit" value='Register'/>
        </form>
    );
}

export default RegisterView