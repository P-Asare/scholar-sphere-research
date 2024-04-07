import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios'
import { FollowerRecommendationContext } from './FollowerRecommendationContext';

function FollowerRecommendationProvider({children}){
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setFollowers(response.data);
        } catch (error){
            console.error('Error fetching followers: ', error);
        }
    };

    return (
        <FollowerRecommendationContext.Provider value={{followers}}>
            {children}
        </FollowerRecommendationContext.Provider>
    );
}

export default FollowerRecommendationProvider;