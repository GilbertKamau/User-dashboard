const initialState = {
    loanRequests: [],
    contributions: [],
  };
  
  const loanReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LOAN_REQUESTS':
        return { ...state, loanRequests: action.payload };
      case 'DISBURSE_LOAN':
        return {
          ...state,
          loanRequests: state.loanRequests.map((loan) => 
            loan.id === action.payload ? { ...loan, status: 'Disbursed' } : loan
          ),
        };
      case 'FETCH_CONTRIBUTIONS':
        return { ...state, contributions: action.payload };
      default:
        return state;
    }
  };
  
  export default loanReducer;
  