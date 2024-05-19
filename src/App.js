import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import UserList from './components/Users/UserList';
import RoleAssignment from './components/Users/RoleAssignment';
import Permissions from './components/Users/Permissions';
import LoanRequestList from './components/Loans/LoanRequestList';
import LoanDisbursement from './components/Loans/LoanDisbursement';
import ContributionRecords from './components/Loans/ContributionRecords';
import Login from './components/Auth/Login';
import CredentialsManagement from './components/Auth/CredentialsManagement';
import SystemUsageReport from './components/Reports/SystemUsageReport';
import PerformanceReport from './components/Reports/PerformanceReport';
import BottleneckResolver from './components/Reports/BottleneckResolver';
import Settings from './components/Settings/Settings';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/users" component={UserList} />
          <Route path="/assign-role" component={RoleAssignment} />
          <Route path="/manage-permissions" component={Permissions} />
          <Route path="/loans" component={LoanRequestList} />
          <Route path="/loan-disbursement" component={LoanDisbursement} />
          <Route path="/contribution-records" component={ContributionRecords} />
          <Route path="/settings" component={Settings} />
          <Route path="/system-usage-report" component={SystemUsageReport} />
          <Route path="/performance-report" component={PerformanceReport} />
          <Route path="/resolve-bottlenecks" component={BottleneckResolver} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



