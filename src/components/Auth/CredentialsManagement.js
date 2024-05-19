import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateCredentials } from '../../redux/actions';

function CredentialsManagement() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState('');
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUpdateCredentials = () => {
    dispatch(updateCredentials(selectedUser, credentials));
  };

  return (
    <div>
      <h2>Manage Credentials</h2>
      <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        placeholder="Username" 
        value={credentials.username} 
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={credentials.password} 
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} 
      />
      <button onClick={handleUpdateCredentials}>Update Credentials</button>
    </div>
  );
}

export default CredentialsManagement;
