
import '../styles/OptionSelection.css';

/**
 * 
 * @param {Object} props 
 * @param {Object} props.options
 * 
 * @returns 
 */
function OptionSelection(props){

    const options = props.options;
    
    const handleSelectChange = (e) => {
        const selectedOption = e.target.value;
        props.onChange(selectedOption);
    }

    const optionsList = Object.entries(options).map(([id, value]) => (
        <div className='select-child' key={id}>
            <input className="checkBox" type="checkbox" onChange={handleSelectChange} name="options[]" value={id}/>
            <p className="box-text">{value}</p>
        </div>
    ));

    return (
        <>
            <p className='select-title'>Interests:</p>
            <div className="boxes-container">
                {optionsList}
            </div>
        </>
    );
}

export default OptionSelection