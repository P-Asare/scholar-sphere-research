import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeView from './pages/HomeView';
import LoginView from './pages/LoginView';
import RegisterView from './pages/RegisterView';
import Header from './components/Header';

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/home" element={<HomeView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
