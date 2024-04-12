import '../styles/UserPost.css';
import React, {useState} from 'react';
import BigProfileItem from './BigProfileItem';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import axios from 'axios';


/**
 * 
 * @param {Object} post - A posts object given details about each post
 * @returns 
 */
function UserPost({post}){

    
    const [requestSent, setRequestSent] = useState(false);

    const [savePost, setSavePost] = useState(false);

    const handleSave = async () => {
        setSavePost(true);
        console.log(savePost);
    }

    const handleRequest = async () => {
        // TODO: Include post request to 
        // try{
        //     await axios.post('', {
        //         userId: login.id,
        //         projectId: project.id,
        //     });
        //     setRequestSent(true);
        // } catch (error){
        //     console.error('Error requesting to joing project:', error);
        // }
        setRequestSent(true);
    }


    return(
        <div className="post-container">
            <BigProfileItem  userId={post.faculty_id} />
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