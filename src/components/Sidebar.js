import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/users">Manage Users</Link></li>
          <li><Link to="/assign-role">Assign Roles</Link></li>
          <li><Link to="/manage-permissions">Manage Permissions</Link></li>
          <li><Link to="/loans">Manage Loan Requests</Link></li>
          <li><Link to="/loan-disbursement">Disburse Loans</Link></li>
          <li><Link to="/contribution-records">Contribution Records</Link></li>
          <li><Link to="/system-usage-report">System Usage Report</Link></li>
          <li><Link to="/performance-report">Performance Report</Link></li>
          <li><Link to="/resolve-bottlenecks">Resolve Bottlenecks</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
