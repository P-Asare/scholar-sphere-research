import ProfileItem from "./ProfileItem";
import '../styles/Collaborators.css';

function Collaborators({collaborators}){

    const collaboratorsList = collaborators.map((collaborator) => <ProfileItem key={collaborator.collaborator_id} follower={collaborator} isright={false} isapplication={false} />);

    console.log(collaboratorsList)

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