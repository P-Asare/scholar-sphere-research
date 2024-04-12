import '../styles/ProjectDialogue.css';

/**
 * 
 * @param {boolean} isOpen - Determine whether or not the box is opn
 * @param {Function} setOpen - Set the box as open or close
 * @returns 
 */
function ProjectDialogue({isOpen, setOpen}){

    const handleCloseBox = () => {
        setOpen(false);
    }

    return(
        <>
            {isOpen && (
                <div className="overlay">
                <form >
                    <div className="box">
                        <p className="close-box" onClick={handleCloseBox}>X</p>
                        <input type="text" className="project-name" placeholder='Project name' />
                        <textarea maxLength={1000} className="description" placeholder="Type description here..."></textarea>
                        <button className="create-btn">Create Project</button>
                    </div>
                </form>
            </div>
            )}
        </>
    );
}

export default ProjectDialogue