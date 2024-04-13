import {createContext, useContext, useState} from 'react';

const CollaboratorContext = createContext();

export const CollaboratorProvider = ({children}) => {
    const [collaboratorData, setCollaboratorData] = useState({});

    const fetchCollaborators = async (projectId) => {
        try {
            const response = await fetch(`http://localhost:80/scholar-sphere/actions/get_project_collaborators.php?proj_id=${projectId}`, {
                method: 'GET',
                headers: {
                    'content-type':'application/json'
                }
            });

            if(!response.ok){
                throw new Error('Collaborator fetch failed');
            }

            const data = await response.json();

            if(data.success === false){
                setCollaboratorData({});
            } else {
                setCollaboratorData(data);
            }
            
        } catch (error){
            console.error('Error fetching collaborators');
        }
    };

    return (
        <CollaboratorContext.Provider value={{collaboratorData, fetchCollaborators}}>
            {children}
        </CollaboratorContext.Provider>
    );
};

export const useCollaboratorData = () => useContext(CollaboratorContext);