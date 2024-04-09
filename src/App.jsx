import './App.css'
import LoginView from './pages/LoginView'
import Header from './components/Header'
import RegisterView from './pages/RegisterView';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import MiddleSection from './components/MiddleSection';
import PostsProvider from './contexts/PostsProvider';
import UserProvider from './contexts/UserProvider';
import React,{useState} from 'react';

function App() {

  const [activeSection, setActiveSection] = useState();

  return (
    <>
      <UserProvider>
      <PostsProvider>
        <div className="wrapping">
          <Header />
          <div className="others">
            {/* <LoginView /> */}
          {/* <RegisterView /> */}
            
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

export default App
