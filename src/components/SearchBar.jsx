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
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const result = json.filter((proj) => {
                    return value && proj && proj.name && proj.name.toLowerCase().includes(value); //TODO: change to correct variables in json
                })
                props.setResults(result);
            });
    }

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