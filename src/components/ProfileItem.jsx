import '../styles/ProfileItem.css';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

/**
 * 
 * @param {Object} follower - group of followers who follower //TODO: Include is following
 * @returns 
 */
function ProfileItem({follower, isright, isapplication}){

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
                    <CheckIcon sx={{color: "green", fontSize: 20}}/>
                    <CloseIcon sx={{color: "red", fontSize: 20}} />
                </div>
            ) : (
                <p></p>
            )}
            
            
        </div>
    );
}

export default ProfileItem