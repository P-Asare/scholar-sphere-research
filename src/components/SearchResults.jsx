import '../styles/SearchResults.css';

/**
 * 
 * @param {Object} props 
 * @param {array} props.results - List of all results from search
 * @returns 
 */
function SearchResults(props){

    const results = props.results;
    const resultsList = results.map((result,id) => <div key={id}>{result.name}</div>)

    return(
        <div className="resultsContainer">
            {resultsList}
        </div>
    );
}

export default SearchResults