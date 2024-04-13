
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import MiddleSection from '../components/MiddleSection';
import PostsProvider from '../contexts/PostsProvider';
import UserProvider from '../contexts/UserProvider';
import React,{useState, useEffect} from 'react';
import PostDialogue from '../components/PostDialogue';
import { useProjectData } from '../contexts/ProjectDataContext';
import { useUserData } from '../contexts/UserDataContext';

function HomeView() {

  const [activeSection, setActiveSection] = useState("home");
  const [modal, setModal] = useState(false);
  const {projectData, fetchProject} = useProjectData();
  const { userData, updateUserData} = useUserData();

  useEffect(() => {
    if (!projectData) {
        fetchProject(userData.session_data.user_id);
    }
  }, [projectData, fetchProject]);
  
  return (
    <>
      <UserProvider>
      <PostsProvider>
        <PostDialogue isOpen={modal} setOpen={setModal} project={projectData} />
        <div className="wrapping">
          <div className="others">
            
            <div className="first">
              <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} showModal={setModal} />
            </div>
            <div className="second">
              <MiddleSection activeSection={activeSection} projectData={projectData} />
            </div>
            <div className="third">
                <RightSidebar/>
            </div>
          </div>
        
        </div>
      </PostsProvider>
      </UserProvider>
      
    </>
  );
}

export default HomeView
