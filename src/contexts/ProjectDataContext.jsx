import { createContext, useContext, useState } from 'react';

const ProjectDataContext = createContext();

export const ProjectDataProvider = ({ children }) => {
    const [projectData, setProjectData] = useState(null);

    const fetchProject = async () => {
    try {
        const response = await fetch('http://localhost:80/scholar-sphere/actions/get_project_action.php', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
        });

        if(!response.ok){
            throw new Error('Project fetch failed');
        }
        const data = await response.json();

        setProjectData(data);
        console.log(projectData);

    } catch (error) {
        console.error('Error fetching project: ', error);
    }
    };

    return (
        <ProjectDataContext.Provider value={{ projectData, fetchProject }}>
        {children}
        </ProjectDataContext.Provider>
    );
};

export const useProjectData = () => useContext(ProjectDataContext);
