import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updatePermissions } from '../../redux/actions';

function Permissions() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState('');
  const [permissions, setPermissions] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUpdatePermissions = () => {
    dispatch(updatePermissions(selectedUser, permissions));
  };

  return (
    <div>
      <h2>Manage Permissions</h2>
      <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        placeholder="Permissions" 
        value={permissions} 
        onChange={(e) => setPermissions(e.target.value)} 
      />
      <button onClick={handleUpdatePermissions}>Update Permissions</button>
    </div>
  );
}

export default Permissions;
