import '../styles/MiddleSection.css'
import UserPost from './UserPost';
import React, { useContext } from 'react';
import { PostsContext } from '../contexts/PostsContext';


function MiddleSection(){
    const {posts} = useContext(PostsContext);

    const postsList = posts.map((post) => <UserPost key={post.id} post={post}/>);

    return(
        <div className="main_container">
            {postsList}
        </div>
    );
}

export default MiddleSection