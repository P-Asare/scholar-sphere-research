import {createContext, useContext, useState} from 'react';

const ProgramContext = createContext();

export const ProgramProvider = ({children}) => {
    const [programData, setProgramData] = useState({});

    const fetchProgram = async () => {
        try {
            const response = await fetch(`https://scholarsphere.asafam.com/actions/get_departments.php`, {
                method: 'GET',
                headers: {
                    'content-type':'application/json'
                }
            });

            if(!response.ok){
                throw new Error('Program fetch failed');
            }

            const data = await response.json();

            setProgramData(data);
            
        } catch (error){
            console.error('Error fetching programs');
        }
    };

    return (
        <ProgramContext.Provider value={{programData, fetchProgram}}>
            {children}
        </ProgramContext.Provider>
    );
};

export const useProgramData = () => useContext(ProgramContext);