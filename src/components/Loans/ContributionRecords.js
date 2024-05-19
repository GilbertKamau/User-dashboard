import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContributions } from '../../redux/actions';

function ContributionRecords() {
  const dispatch = useDispatch();
  const contributions = useSelector((state) => state.loans.contributions);

  useEffect(() => {
    dispatch(fetchContributions());
  }, [dispatch]);

  return (
    <div>
      <h2>Contribution Records</h2>
      <ul>
        {contributions.map((contribution) => (
          <li key={contribution.id}>{contribution.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContributionRecords;
