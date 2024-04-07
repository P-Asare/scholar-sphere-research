
import '../styles/Sidebar.css';
import Collaborators from './Collaborators';
import SidebarItem from "./SidebarItem";
import SubSidebarItem from './SubSidebarItem';

/**
 * Component to represent the left side bar with the tabs
 * @returns
 */

// TODO: Include props to make stats and other data dynamic
function Sidebar({activeSection, setActiveSection}){

    const collaborators = [{
        "id": "1",
        "name": "Palal",
        "username": "quick"
    },
    {
        "id": "2",
        "name": "Asare",
        "username": "quicklook"
    },
    {
        "id": "3",
        "name": "Asare",
        "username": "quicklook"
    }]

    return (
        <div className="bar">
            <div className="upper-bar">
                <p className='header'>Hi, Palal</p> 
                <div className="tabs">
                    <SidebarItem name="Home" />
                    <SidebarItem name="Network" />
                    <div className="subitems">
                        <SubSidebarItem name='Following' stats={7}/>
                        <SubSidebarItem name='Suggested' stats={10}/>
                    </div>
                    <SidebarItem name="Favorites" />
                    <SidebarItem name="Project" />
                    <button className='post-btn'>POST</button>
                    <Collaborators collaborators={collaborators}/>
                </div>
            </div>
            <div className="lower-bar">
            <button className='complete-btn'>Complete Project</button>
            </div>
            
        </div>
    );
}

export default Sidebar