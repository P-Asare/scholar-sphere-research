import {createContext, useContext, useState} from 'react';

const RequestContext = createContext();

export const RequestProvider = ({children}) => {
    const [requestData, setRequestData] = useState(null);

    const fetchRequest = async (projectId) => {
        try {
            const response = await fetch(`http://localhost:80/scholar-sphere/actions/get_requests_action.php?dep_id=${projectId}`, {
                method: 'GET',
                headers: {
                    'content-type':'application/json'
                }
            });

            if(!response.ok){
                throw new Error('Project fetch failed');
            }

            const data = await response.json();

            setRequestData(data);
        } catch (error){
            console.error('Error fetching requests');
        }
    };

    return (
        <RequestContext.Provider value={{requestData, fetchRequest}}>
            {children}
        </RequestContext.Provider>
    );
};

export const useRequestData = () => useContext(RequestContext);