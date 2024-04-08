import '../styles/MiddleSection.css'
import UserPost from './UserPost';
import React, { useContext } from 'react';
import { PostsContext } from '../contexts/PostsContext';


function MiddleSection({activeSection}){
    const {posts} = useContext(PostsContext);

    let filteredPosts = posts;
    // TODO: Include Favorite context here
    // if(activeSection === 'favorite'){
    //     filteredPosts = posts.filter(post => ...);
    // }

    const postsList = filteredPosts.map((post) => <UserPost key={post.id} post={post}/>);

    return(
        <div className="main_container">
            {
            (activeSection === "home" && postsList) ||
            (activeSection === "favorites" && <p>Favorite</p>) ||
            (activeSection === "project" && <p>Project</p>)
            }
        </div>
    );
}

export default MiddleSection