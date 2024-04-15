import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('/api/users');
    setUsers(response.data);
  };

  const handleDelete = async (id: any) => {
    await axios.delete(`/api/users/${id}`);
    fetchUsers();  // Refresh the list after deletion
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user :any) => (
          <li key={user.id}>
            {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;