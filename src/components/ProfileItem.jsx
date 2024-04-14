import '../styles/ProfileItem.css';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Swal from 'sweetalert2';

/**
 * 
 * @param {Object} follower - group of followers who follower //TODO: Include is following
 * @returns 
 */
function ProfileItem({follower, isright, isapplication}){

    const [isAccepted, setIsAccepted] = useState();

    const handlePickClick = async (id, action) => {
        try {
            const response = await fetch(`https://scholarsphere.asafam.com/actions/accept_decline_request_action.php?action=${action}&pen_id=${id}`, {
                method: 'GET',
                headers: {
                    'content-type':'application/json'
                }
            });

            if(!response.ok){
                throw new Error('Pick failed');
            }

            setIsAccepted(action);

            const data = await response.json()

            if (isAccepted === 1) {
                Swal.fire({
                    title: 'Success!',
                    text: 'You approved the student as a collaborator!',
                    icon: 'success',
                });
            } else if(isAccepted === 2){
                Swal.fire({
                    title: 'Rejected!',
                    text: 'You rejected the user!',
                    icon: 'error',
                });
            }

        } catch (error) {
            console.error('Error following user:', error);
        }
    };

    return(
        <div className="profile-container">
            <div className="user-details">
                <div className="profile-image"></div>
                <div className="profile-details">
                    <p className="follow-name">{follower.fname} {follower.lname}</p>
                    <p className="follow-dep">department</p>
                    {isright ? (
                        <p className="follow-btn">Follow</p>
                    ) : (
                    <p></p>
                    ) }
                </div>
            </div>
            {isapplication ? (
                <div className="actions">
                    <CheckIcon sx={{color: "green", fontSize: 20}} onClick={() => handlePickClick(follower.id, 1)}/>
                    <CloseIcon sx={{color: "red", fontSize: 20}} onClick={() => handlePickClick(follower.id, 2)} />
                </div>
            ) : (
                <p></p>
            )}
            
            
        </div>
    );
}

export default ProfileItem