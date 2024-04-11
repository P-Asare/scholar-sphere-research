import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomeView from './pages/HomeView';
import LoginView from './pages/LoginView';
import RegisterView from './pages/RegisterView';
import Header from './components/Header';
import { useAuth } from './contexts/AuthenticationContext';
import { UserDataProvider } from './contexts/UserDataContext';
import PostDialogue from './components/PostDialogue';

function App() {

  const {isAuthenticated} = useAuth();

  return (
    <>
    <PostDialogue />
    <UserDataProvider>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path='/home' element={isAuthenticated ? <HomeView /> : <Navigate to="/" replace />}/>
          </Routes>
        </Router>
    </UserDataProvider>
    </>
  );
}

export default App;
