import '../styles/SearchResults.css';

/**
 * 
 * @param {Object} props 
 * @param {array} props.results - List of all results from search
 * @returns 
 */
function SearchResults(props){

    const results = props.results;
    const resultsList = results.map((result) => <div key={result.id}>{result.title}</div>)

    return(
        <div className="resultsContainer">
            {resultsList}
        </div>
    );
}

export default SearchResults