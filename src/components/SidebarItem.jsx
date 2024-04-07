
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import '../styles/SidebarItem.css';

/**
 * Component to represent a tab in a sidebar
 * 
 * @param {Object} props 
 * @param {string} props.name
 * 
 * @returns 
 */
function SidebarItem({name}){
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
        <div className="item-container">

            {selectIcon(name)}
            <p className="item-name">{name}</p>
        </div>
    );
}

export default SidebarItem