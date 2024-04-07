import '../styles/InputFields.css';

/**
 * 
 * @param {object} props 
 * @param {string} props.label - the label of the input
 * @param {string} props.type - the type of the input field
 * @param {*} props.val - the value variable to be displayed in field
 * @param {string} props.placeholders - the placeholder value of the input tag
 * @param {Function} props.action - setter action from the useState
 *  
 */
function InputFields(props){

    return(
    
        <div className='input-container'>
            <label className='title' htmlFor="input">{props.label}:</label>
            <input className='field' type={props.type} value={props.val} placeholder={props.placeholders} onChange={props.action}></input>
        </div>
        
    );
}

export default InputFields