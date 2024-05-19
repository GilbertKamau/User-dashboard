import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, assignRole } from '../../redux/actions';

function RoleAssignment() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAssignRole = () => {
    dispatch(assignRole(selectedUser, role));
  };

  return (
    <div>
      <h2>Assign Roles</h2>
      <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        placeholder="Role" 
        value={role} 
        onChange={(e) => setRole(e.target.value)} 
      />
      <button onClick={handleAssignRole}>Assign Role</button>
    </div>
  );
}

export default RoleAssignment;
