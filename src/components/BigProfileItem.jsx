import '../styles/BigProfileItem.css';
import React, {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';


/**
 * 
 * @param {integer} userId - userId of user
 * @returns 
 */
function BigProfileItem({userId}){

    const { users } = useContext(UserContext);

    // Ensure conditions are checked before data retrieval happens
    if (!users || users.length === 0) {
        return null;
    }

    const user = users.find(user => user.id === userId);
    
    return(
        <div className="item_container">
            <div className="item_image">
                {/* <img src='./assets/images/login_image_2.jpg' alt="Profile Image" /> */}
            </div>
            <div className="item_details">
                <p className="name">{user && user.fname} {user && user.lname}</p>
                <p className="is_following">Following</p>
            </div>
        </div>
    );
}

export default BigProfileItem