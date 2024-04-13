import '../styles/UserPost.css';
import React, {useState} from 'react';
import BigProfileItem from './BigProfileItem';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import axios from 'axios';
import { useUserData } from '../contexts/UserDataContext';
import Swal from 'sweetalert2';


/**
 * 
 * @param {Object} post - A posts object given details about each post
 * @returns 
 */
function UserPost({post}){
    
    const [requestSent, setRequestSent] = useState(false);
    const [savePost, setSavePost] = useState(false);
    const {userData, updateUserData} = useUserData();

    const handleSave = async () => {
        setSavePost(true);
        console.log(savePost);
    }

    // Request to join project linked to a post
    const handleRequest = async () => {
        console.log(userData.session_data.user_id);
        console.log(post.project_id)

        try{
            const response = await fetch('http://localhost:80/scholar-sphere/actions/request_action.php', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    userId: userData.session_data.user_id,
                    projectId: post.project_id,
                })
            });

            if(!response.ok){
                throw new Error('Request failed');
            }

            const data = await response.json();

            if(data.success == false){
                throw new Error('Request failed');
            }

            console.log(data);

            // Display success message using SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Request Success',
                text: 'Your request as been placed.',
            });

            setRequestSent(true);


        } catch (error){
            console.error('Error requesting to joing project:', error);

            // Display error message using SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Request Failed',
                text: 'Your request could not be placed at this time',
            });
        }
    }


    return(
        <div className="post-container">
            <BigProfileItem  userId={post.user_id} />
            <p className='post-content'>{post.comment} </p>
            <div className="lower-section">
                <div className="left">
                    <BookmarkIcon sx={{color: "#b05353", fontSize: 20}} /> {/*TODO: Include handler to update database on what has been saved*/}
                    {savePost ? (
                        <p style={{color: "grey", opacity: 0.5, pointerEvents: "none"}}>Saved</p>
                    ) : (
                        <p onClick={handleSave}>Save post</p>
                    )}
                </div>
                <div className="right">
                    { requestSent ? (
                        <button className="request" disabled>Request Sent</button>
                    ) : (
                        <button className="request" onClick={handleRequest}>Request</button>
                    )}
                </div>
            </div>



        </div>
    );
}

export default UserPost