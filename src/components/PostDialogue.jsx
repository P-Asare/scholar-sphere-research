
import { useState } from 'react';
import '../styles/PostDialogue.css'

/**
 * Component to collect data from users about post
 * 
 * @param {boolean} isOpen 
 * @returns 
 */
function PostDialogue({isOpen, setOpen, project}){

    const [comment, setComment] = useState();
    const projectId = project && project[0] && project[0].id;

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
            const response = await fetch('https://scholarsphere.asafam.com/actions/create_post_action.php', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    comment: comment,
                    project_id: projectId
                })
            });

            if(!response.ok){
                throw new Error('Post Failed');
            }

            // Close dialogue box
            setOpen(false);
            setComment('');

            // Convert response to json data
            const postResponse = await response.json();

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
                            <input name='project_name' type="text" defaultValue={project && project[0].title} readOnly /> {/*TODO: Ensure project name is dynamic/ */}
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