import { useEffect } from 'react';
import { useRequestData } from '../contexts/RequestsContext';
import '../styles/SuggestFollowers.css';
import ProfileItem from './ProfileItem';



function ColabRequests({projectData}){
    const { requestData, fetchRequest } = useRequestData();

    useEffect(() => {
        const fetchData = async () => {
        try {
            if (projectData && projectData.length > 0) {
                await fetchRequest(projectData[0].id);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, [fetchRequest, projectData]);

    if (!requestData) {
        return <p>Loading requests...</p>;
    }

    if (Object.keys(requestData).length === 0) {
        return <p>No requests</p>;
    }

    const requestList = Object.entries(requestData).map(([_, request]) => (
        <ProfileItem key={request.id} follower={request} isright={true} isapplication={true} />
    ));

    return(
       
        <div className="followerscontainer">
            <p className='container-title'>Requests sent</p>
            {requestData && requestList}
        </div>
    );
}

export default ColabRequests;