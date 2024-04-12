
import { useState } from 'react';
import '../styles/PostDialogue.css'
import { useProjectData } from '../contexts/ProjectDataContext';

/**
 * Component to collect data from users about post
 * 
 * @param {boolean} isOpen 
 * @returns 
 */
function PostDialogue({isOpen, setOpen}){

    const [comment, setComment] = useState();
    const {projectData, fetchProject} = useProjectData();
    // const projectTitle = projectData[0].title;

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    const handlePostClose = () => {
        setOpen(false);
    }

    // TODO: Fix unwanted character error and crosscheck ending transaction in backend
    const handlePostSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:80/scholar-sphere/actions/create_post_action.php', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({comment})
            });

            if(!response.ok){
                throw new Error('Post Failed');
            }

            // Close dialogue box
            setOpen(false);
            setComment('');

            // Convert response to json data
            const postResponse = await response.json();

            // write to console state of post
            console.log(postResponse.message);

        } catch (error) {
            console.error('Post error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Post Failed',
                text: 'Kindly try again later',
            });
        }
    }

    return(

        <>
            {isOpen && (
                <div className="modal-overlay">
                    <form onSubmit={handlePostSubmit}>
                        <div className="info_box">
                            <p className='close' onClick={handlePostClose}>X</p>
                            <input name='project_name' type="text" defaultValue="Testing" readOnly /> {/*TODO: Ensure project name is dynamic/ */}
                            <textarea name='post_content' value={comment} onChange={handleCommentChange} placeholder='Type post here...'></textarea>
                            <button type='submit' className='post_btn'>Post</button>
                        </div>
                    </form>
                </div>
            )}
        </>
        
    );

}

export default PostDialogue