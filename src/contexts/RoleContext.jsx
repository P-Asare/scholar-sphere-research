import { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [roleData, setRoleData] = useState({});

    const fetchRole = async () => {
        try {
            const response = await fetch(`http://localhost:80/scholar-sphere/actions/get_user_role.php`, {
                method: 'GET',
                headers: {
                    'content-type':'application/json'
                }
            });

            if(!response.ok){
                throw new Error('Role fetch failed');
            }

            const data = await response.json();

            setRoleData(data);
            
        } catch (error){
            console.error('Error fetching roles');
        }
    };

    return (
        <RoleContext.Provider value={{ roleData, fetchRole }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRoleData = () => useContext(RoleContext);
