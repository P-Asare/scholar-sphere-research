import { useContext } from 'react';
import '../styles/SuggestFollowers.css';
import ProfileItem from './ProfileItem';
import { FollowerRecommendationContext } from '../contexts/FollowerRecommendationContext';


function SuggestFollowers(){
    const {followers} = useContext(FollowerRecommendationContext);

    const limitedFollowers = followers.slice(0, 6);

    const followerList = limitedFollowers.map((follower) => <ProfileItem key={follower.id} follower={follower} isright={true} isapplication={false}/>)

    return(
        <div className="followerscontainer">
            <p className='container-title'>Who to follow?</p>
            {followerList}
        </div>
    );
}

export default SuggestFollowers