import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomeView from './pages/HomeView';
import LoginView from './pages/LoginView';
import RegisterView from './pages/RegisterView';
import Header from './components/Header';
import { useAuth } from './contexts/AuthenticationContext';

function App() {

  const {isAuthenticated} = useAuth();

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path='/home' element={isAuthenticated ? <HomeView /> : <Navigate to="/" replace />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
