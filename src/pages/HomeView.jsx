
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import MiddleSection from '../components/MiddleSection';
import PostsProvider from '../contexts/PostsProvider';
import UserProvider from '../contexts/UserProvider';
import React,{useState} from 'react';

function HomeView() {

  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <UserProvider>
      <PostsProvider>
        <div className="wrapping">
          <div className="others">
            
            <div className="first">
              <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
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
