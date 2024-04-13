import '../styles/SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import React, {useState} from 'react';

/**
 * 
 * @param {Object} props 
 * @param {Function} props.setResults - Function to change the array of results
 * @returns 
 */
function SearchBar(props){
    const [input, setInput] = useState('');

    // Fetch data from endpoint for query
    const fetchData = (value) => {
        fetch("http://localhost:80/scholar-sphere/actions/get_all_projects.php", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((json) => {
            const result = json.filter((proj) => {
                return value && proj && proj.title && proj.title.toLowerCase().includes(value); //TODO: change to correct variables in json
            });
            props.setResults(result);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInput(val);
        fetchData(val);
    }

    return(
        <div className="searchcontainer">
            <input value={input} onChange={handleInputChange} placeholder='Search for projects'></input>
            <SearchIcon id="searchicon" />
        </div>
    );
}

export default SearchBar