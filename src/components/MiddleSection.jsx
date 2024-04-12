import '../styles/MiddleSection.css'
import UserPost from './UserPost';
import React, { useContext, useEffect } from 'react';
import { PostsContext } from '../contexts/PostsContext';
import ProjectsView from '../pages/ProjectsView';
import { useProjectData } from '../contexts/ProjectDataContext';


function MiddleSection({activeSection, projectData}){
    const {posts} = useContext(PostsContext);
    // const { projectData, fetchProject } = useProjectData();

    let filteredPosts = posts;
    // TODO: Include Favorite context here
    // if(activeSection === 'favorite'){
    //     filteredPosts = posts.filter(post => ...);
    // }

    // useEffect(() => {
    //     if (!projectData) {
    //         fetchProject();
    //     }
    // }, [projectData, fetchProject]);

    const postsList = filteredPosts.map((post) => <UserPost key={post.id} post={post}/>);

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