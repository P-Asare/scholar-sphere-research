import './App.css'
import LoginView from './pages/LoginView'
import Header from './components/Header'
import RegisterView from './pages/RegisterView';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import MiddleSection from './components/MiddleSection';
import PostsProvider from './contexts/PostsProvider';
import UserProvider from './contexts/UserProvider';

function App() {

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
              <Sidebar />
            </div>
            <div className="second">
              <MiddleSection />
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
