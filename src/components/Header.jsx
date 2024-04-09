import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState('');

    useEffect(() => {

        if (location.pathname === '/') {
            setName('Register');
        } else if (location.pathname === '/register') {
            setName('Login');
        }
    }, [location.pathname]); 

    const handleClick = () => {
        if (location.pathname === '/') {
            navigate('/register');
        } else if (location.pathname === '/register') {
            navigate('/');
        }
    }

    return (
        <header className="page-header">
            <div className="logo-container"></div>
            <div onClick={handleClick} className="other-container">
                {name}
            </div>
        </header>
    );
}

export default Header;
