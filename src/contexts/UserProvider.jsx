import React, { useState, useEffect } from 'react';
import {UserContext} from './UserContext';
import axios from 'axios';

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    return (
      <UserContext.Provider value={{ users, fetchUsers }}>
        {children}
      </UserContext.Provider>
    );
};

export default UserProvider;
  