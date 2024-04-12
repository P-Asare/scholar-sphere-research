import { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../styles/ProjectsView.css';

/**
 * 
 * @param {Object} project - project object containing project details
 * @returns 
 */
function ProjectsView({project}){
    const projectItem = project && project[0];
    console.log(projectItem);

    if(!project || project.length === 0){
        return(
            <div className="empty-project-page">
                <AddIcon sx={{fontSize: 40, color: "lightgray"}} />
                <p className="no-project-text">
                    Create new project
                </p>
            </div>
        );
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