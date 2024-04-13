import '../styles/DropDownInput.css';

/**
 * 
 * @param {Object} props 
 * @param {Object} props.options - An object of key value pairs
 * @param {string} props.title - The label of the input
 * 
 */
function DropDownInput(props){

    const options = props.options;
    const optionsList = Object.entries(options).map(([_,value]) => <option key={value.id} value={value.id}>{value.name}</option>)

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        props.onChange(selectedValue);
    }

    return(
        <div className="dropdown">
            <label className='drop-title'>{props.title}:</label>
            <select className='drop-field' onChange={handleSelectChange}>
                <option value="">Select an option</option>
                {optionsList}
            </select>
        </div>
    );
}

export default DropDownInput