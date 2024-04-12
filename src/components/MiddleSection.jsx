import '../styles/MiddleSection.css'
import UserPost from './UserPost';
import React, { useContext, useEffect } from 'react';
import { PostsContext } from '../contexts/PostsContext';
import ProjectsView from '../pages/ProjectsView';


function MiddleSection({activeSection, projectData}){
    const {posts} = useContext(PostsContext);

    let filteredPosts = posts;
    // TODO: Include Favorite context here
    // if(activeSection === 'favorite'){
    //     filteredPosts = posts.filter(post => ...);
    // }

    const postsList = filteredPosts.map((post) => <UserPost key={post.post_id} post={post}/>);

    return(
        <div className="main_container">
            {
            (activeSection === "home" && postsList) ||
            (activeSection === "favorites" && <p>Favorite</p>) ||
            (activeSection === "project" && <ProjectsView project={projectData} />)
            }
        </div>
    );
}

export default MiddleSection