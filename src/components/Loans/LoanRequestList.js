// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoanRequests } from '../../redux/actions';

function LoanRequestList() {
  const dispatch = useDispatch();
  const loanRequests = useSelector((state) => state.loans);

  useEffect(() => {
    dispatch(fetchLoanRequests());
  }, [dispatch]);

  return (
    <div>
      <h2>Manage Loan Requests</h2>
      <ul>
        {loanRequests.map((loan) => (
          <li key={loan.id}>{loan.amount} - {loan.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default LoanRequestList;
