import React from 'react';
import { useDispatch } from 'react-redux';
import { disburseLoan } from '../../redux/actions';

function LoanDisbursement() {
  const dispatch = useDispatch();
  const handleDisburseLoan = (loanId) => {
    dispatch(disburseLoan(loanId));
  };

  return (
    <div>
      <h2>Disburse Loans</h2>
      <button onClick={() => handleDisburseLoan('loanId')}>Disburse</button>
    </div>
  );
}

export default LoanDisbursement;
