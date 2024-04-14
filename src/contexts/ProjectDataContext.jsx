import { createContext, useContext, useEffect, useState } from 'react';

const ProjectDataContext = createContext();

export const ProjectDataProvider = ({ children }) => {
    const [projectData, setProjectData] = useState(null);

    const fetchProject = async (userId) => {
    try {
        const response = await fetch('https://scholarsphere.asafam.com/actions/get_project_action.php', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({
                id: userId
            })
        });

        if(!response.ok){
            throw new Error('Project fetch failed');
        }
    
        const data = await response.json();

        if (Object.keys(data).length === 0 && data.constructor === Object) {
            setProjectData(null);
        } else {
            setProjectData(data);
        }

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
