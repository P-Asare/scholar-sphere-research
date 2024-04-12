import { useState } from 'react';
import '../styles/ProjectDialogue.css';
import { useUserData } from '../contexts/UserDataContext';

/**
 * 
 * @param {boolean} isOpen - Determine whether or not the box is opn
 * @param {Function} setOpen - Set the box as open or close
 * @returns 
 */
function ProjectDialogue({isOpen, setOpen}){

    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const {userData, updateUserData} = useUserData();

    console.log(userData);

    const handleCloseBox = () => {
        setOpen(false);
    }

    const handleNameChange = (e) => {
        setProjectName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setProjectDescription(e.target.value);
    }

    const handleProjectSubmition = async (e) => {
        e.preventDefault();

        try{

            const response = await fetch('http://localhost:80/scholar-sphere/actions/create_project_action.php', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: projectName,
                    description: projectDescription,
                    faculty_id: userData.session_data.user_id
                })
            });

            if(!response.ok){
                throw new Error('Creation failed');
            }

            //close dialogue box
            setOpen(false);
            setProjectDescription('');
            setProjectName('');

            //convert response to json data
            const postResponse = await response.json();
            console.log(postResponse);

        } catch (error) {
            console.error('Creation error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Creation failed',
                text: 'Kindly try again later'
            });
        }
    }

    return(
        <>
            {isOpen && (
                <div className="overlay">
                <form onSubmit={handleProjectSubmition}>
                    <div className="box">
                        <p className="close-box" onClick={handleCloseBox}>X</p>
                        <input type="text" onChange={handleNameChange} value={projectName} className="project-name" placeholder='Project name' />
                        <textarea onChange={handleDescriptionChange} maxLength={1000} value={projectDescription} className="description" placeholder="Type description here..."></textarea>
                        <button type='submit' className="create-btn">Create Project</button>
                    </div>
                </form>
            </div>
            )}
        </>
    );
}

export default ProjectDialogue