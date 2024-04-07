import ProfileItem from "./ProfileItem";
import '../styles/Collaborators.css';

function Collaborators({collaborators}){

    const collaboratorsList = collaborators.map((collaborator) => <ProfileItem key={collaborator.id} follower={collaborator} isright={false} isapplication={false} />);

    return(
        <>
            <p className="collab_title">Collaborators</p>
            <div className="collab_container">
                {collaboratorsList}
            </div>
        </>
    );
}

export default Collaborators