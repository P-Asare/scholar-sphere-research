import '../styles/SubSidebarItem.css';


/**
 * Component to represent smaller tags
 * 
 * @param {Object} props 
 * @param {string} props.name - Name of subtab
 * @param {int} props.stats - Statistics figure
 * 
 * @returns 
 */
function SubSidebarItem(props){

    return(
        <div className="sub-container">
            <div className="sub-name">{props.name}</div>
            <div className="stats">{props.stats}</div>
        </div>
    );
}

export default SubSidebarItem