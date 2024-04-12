import { useContext } from 'react';
import '../styles/ProjectsView.css';

/**
 * 
 * @param {Object} project - project object containing project details
 * @returns 
 */
function ProjectsView({project}){
    const projectItem = project[0];
    console.log(projectItem);

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