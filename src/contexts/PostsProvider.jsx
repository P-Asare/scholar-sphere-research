import React, { useState, useEffect } from 'react';
import {PostsContext} from './PostsContext';
import axios from 'axios';

const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetchPosts();
    }, []);
  
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    return (
      <PostsContext.Provider value={{ posts, fetchPosts }}>
        {children}
      </PostsContext.Provider>
    );
};

export default PostsProvider;
  