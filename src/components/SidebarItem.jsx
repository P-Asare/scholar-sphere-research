
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import '../styles/SidebarItem.css';
import { PropaneSharp } from '@mui/icons-material';

/**
 * Component to represent a tab in a sidebar
 * 
 * @param {string} name - name of tab
 * @param {boolean} active - whether tab is active or not
 * 
 * @returns 
 */
function SidebarItem({name, active, onClick}){
    const selectIcon = (names) => {
        switch (names.toLowerCase()) {
            case 'home':
                return <HomeIcon sx={{ color: "#b05353", fontSize: 23 }} />;
            case 'network':
                return <PeopleAltIcon sx={{ color: "#b05353", fontSize: 23 }} />;
            case 'favorites':
                return <BookmarkIcon sx={{ color: "#b05353", fontSize: 23 }} />;
            case 'project':
                return <MenuBookIcon sx={{ color: "#b05353", fontSize: 23 }} />;
            default:
                return null;
        }
    };

    return(
        <div className="item-container" onClick={onClick}>

            {selectIcon(name)}
            {active ? (
                <p className="item-name" style={{color: "black"}}>{name}</p>
            ) : (
                <p className="item-name">{name}</p>
            )}
        </div>
    );
}

export default SidebarItem