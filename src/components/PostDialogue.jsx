
import '../styles/PostDialogue.css'

/**
 * Component to collect data from users about post
 * 
 * @param {boolean} isOpen 
 * @returns 
 */
function PostDialogue({isOpen, setOpen}){

    const handlePostClose = () => {
        setOpen(false);
    }

    return(

        <>
            {isOpen && (
                <div className="modal-overlay">
                    <form action="">
                        <div className="info_box">
                            <p className='close' onClick={handlePostClose}>X</p>
                            <input name='project_name' type="text" value="Project name" />
                            <textarea name='post_content' placeholder='Type post here...'></textarea>
                            <button type='submit' className='post_btn'>Post</button>
                        </div>
                    </form>
                </div>
            )}
        </>
        
    );

}

export default PostDialogue