'use client'
import React, { useState } from 'react';
import UserList from '../components/users/UserList';
import UserForm from '../components/users/UserForm';

const UserManagement = () => {
  // State to trigger re-fetching or updating the lists
  const [updateFileList, setUpdateFileList] = useState(false);
  const [updateUserList, setUpdateUserList] = useState(false);

  // Callbacks that toggle state to trigger updates
  const refreshFiles = () => {
    setUpdateFileList(!updateFileList);
  };

  const refreshUsers = () => {
    setUpdateUserList(!updateUserList);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">User Management</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <UserForm onSubmit={refreshUsers} />
          <UserList/>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;