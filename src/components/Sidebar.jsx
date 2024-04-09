
import '../styles/Sidebar.css';
import Collaborators from './Collaborators';
import SidebarItem from "./SidebarItem";
import SubSidebarItem from './SubSidebarItem';

/**
 * Component to represent the left side bar with the tabs
 * 
 * @param{boolean}
 * @returns
 */

// TODO: Include props to make stats and other data dynamic
function Sidebar({activeSection, setActiveSection}){

        // Change section that is active 
        const handleSectionChange = (section) => {
            console.log("testing");
            setActiveSection(section);      
        };

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
                    <SidebarItem 
                        name="Home"
                        active = {activeSection === "home"}
                        onClick = {()=>handleSectionChange('home')} 
                    />
                    <SidebarItem name="Network" />
                    <div className="subitems">
                        <SubSidebarItem name='Following' stats={7}/>
                        <SubSidebarItem name='Suggested' stats={10}/>
                    </div>
                    <SidebarItem
                        onClick = {() => handleSectionChange('favorites')} 
                        name="Favorites"
                        active = {activeSection === "favorites"}
                         
                    />
                    <SidebarItem 
                        name="Project"
                        active={activeSection === "project"}
                        onClick = {() => handleSectionChange('project')}
                    />
                    {activeSection !== "project" && <button className='post-btn'>POST</button> }
                    {/* <Collaborators collaborators={collaborators}/> */}
                    {activeSection === "project" && <Collaborators collaborators={collaborators}/>}
                </div>
            </div>
            <div className="lower-bar">
                {activeSection === "project" && <button className='complete-btn'>Complete Project</button>}
            </div>
            
        </div>
    );
}

export default Sidebar