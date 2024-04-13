
import { useState } from 'react';
import '../styles/Sidebar.css';
import Collaborators from './Collaborators';
import SidebarItem from "./SidebarItem";
import SubSidebarItem from './SubSidebarItem';
import { useProjectData } from '../contexts/ProjectDataContext';
import Swal from 'sweetalert2';
import { useUserData } from '../contexts/UserDataContext';


/**
 * 
 * @param {string} activeSection - keep track of which page is active
 * @param {Function} setActiveSection - set the page that is active
 * @param {Function} showModal - show the dialogue box to take user input 
 * @returns 
 */
function Sidebar({activeSection, setActiveSection, showModal}){
    // TODO: Include props to make stats and other data dynamic

    const {projectData, fetchProject} = useProjectData();
    const { userData, updateUserData} = useUserData();
    
    // Change section that is active 
    const handleSectionChange = (section) => {
        setActiveSection(section);      
    };

    const handlePostClick = () => {
        if (!projectData || Object.keys(projectData).length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please create a project before posting!',
            });
        } else {
            showModal(true);
        }
    }

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
                    {userData && userData.session_data.role == 2 && activeSection !== "project" && <button onClick={handlePostClick} className='post-btn'>POST</button> }
                    {/* <Collaborators collaborators={collaborators}/> */}
                    {!projectData && userData && userData.session_data.role === 1 && activeSection === "project" && <Collaborators collaborators={collaborators}/>}
                    {projectData && userData && userData.session_data.role === 2 && activeSection === "project" && <Collaborators collaborators={collaborators}/>}
                </div>
            </div>
            <div className="lower-bar">
                {userData && userData.session_data.role === 2 && activeSection === "project" && <button className='complete-btn'>Complete Project</button>}
            </div>
            
        </div>
    );
}

export default Sidebar