import { createContext, useContext, useState } from 'react';

const InterestContext = createContext();

export const InterestProvider = ({ children }) => {
    const [interestData, setInterestData] = useState({});

    const fetchInterest = async () => {
        try {
            const response = await fetch(`http://localhost:80/scholar-sphere/actions/get_interests.php`, {
                method: 'GET',
                headers: {
                    'content-type':'application/json'
                }
            });

            if(!response.ok){
                throw new Error('Interest fetch failed');
            }

            const data = await response.json();

            setInterestData(data);
            
        } catch (error){
            console.error('Error fetching interests');
        }
    };

    return (
        <InterestContext.Provider value={{ interestData, fetchInterest }}>
            {children}
        </InterestContext.Provider>
    );
};

export const useInterestData = () => useContext(InterestContext);
