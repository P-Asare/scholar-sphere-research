import { useContext, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../styles/ProjectsView.css';
import ProjectDialogue from '../components/ProjectDialogue';
import { useUserData } from '../contexts/UserDataContext';

/**
 * 
 * @param {Object} project - project object containing project details
 * @returns 
 */
function ProjectsView({project}){
    const projectItem = project && project[0];
    const { userData, updateUserData} = useUserData();

    const [open, setOpen] = useState(false);

    const handleOpenCreate = () => {
        setOpen(!open);
    }

    if (!project || project.length === 0) {
        if (userData && userData.session_data.role == 2) { // No projects and the user is faculty
            return (
                <>
                    <div className="empty-project-page" onClick={handleOpenCreate}>
                        <AddIcon sx={{ fontSize: 40, color: "lightgray"}} />
                        <p className="no-project-text">
                            Create new project
                        </p>
                    </div>
                    <ProjectDialogue isOpen={open} setOpen={setOpen} />
                </>
            );
        } else { // NO projects and user is a student
            return null;
        }
    }

    return (
        <>  
        {project && (
            <div className='project-page'>
                <p className="project-title">{projectItem.title}</p>
                <p className="project-description">
                    {projectItem.description}
                </p>
                <p>Chat section</p>
            </div>
        )}
            
        </>
    );
}

export default ProjectsView