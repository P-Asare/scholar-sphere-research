
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import MiddleSection from '../components/MiddleSection';
import PostsProvider from '../contexts/PostsProvider';
import UserProvider from '../contexts/UserProvider';
import React,{useState} from 'react';
import PostDialogue from '../components/PostDialogue';

function HomeView() {

  const [activeSection, setActiveSection] = useState("home");
  const [modal, setModal] = useState(false);
  
  return (
    <>
      <UserProvider>
      <PostsProvider>
        <PostDialogue isOpen={modal} setOpen={setModal} />
        <div className="wrapping">
          <div className="others">
            
            <div className="first">
              <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} showModal={setModal} />
            </div>
            <div className="second">
              <MiddleSection activeSection={activeSection} />
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
