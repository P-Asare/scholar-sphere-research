import '../styles/RightSidebar.css';
import SearchBar from './SearchBar';
import React, {useState} from 'react';
import SearchResults from './SearchResults';
import SuggestFollowers from './SuggestFollowers';
import FollowerRecommendationProvider from '../contexts/FollowerRecommendationProvider';


function RightSidebar(){

    const [results, setResults] = useState([]);

    return(
        <>
            <div className="right-bar">
                <SearchBar setResults={setResults} />
                {results.length > 0 && <SearchResults results={results} />}
                <FollowerRecommendationProvider>
                    <SuggestFollowers />
                </FollowerRecommendationProvider>
                
            </div>
        </>
    );
}

export default RightSidebar