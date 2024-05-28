import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="widgets">
        <div className="widget">
          <h2>Loan Disbursement</h2>
          <button>Disburse Loan</button>
        </div>
        <div className="widget">
          <h2>Accept Members</h2>
          <button>Accept New Member</button>
        </div>
        <div className="widget">
          <h2>Grant Permissions</h2>
          <button>Grant Permissions</button>
        </div>
        <div className="widget">
          <h2>Member Contributions</h2>
          <button>View Contributions</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
