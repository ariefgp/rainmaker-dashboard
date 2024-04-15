import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ user = {}, onSubmit }: any) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user.id) {
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);

    try {
      if (user.id) {
        await axios.put(`/api/users/${user.id}`, formData);
      } else {
        await axios.post('/api/users', formData);
      }
      onSubmit(); // Call the onSubmit callback to refresh the list or navigate away
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter user's email"
      />
      <button type="submit" className="btn">{user.id ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default UserForm;