const initialState = {
    isDarkMode: false,
  };
  
  const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_DARK_MODE':
        return { ...state, isDarkMode: action.payload };
      default:
        return state;
    }
  };
  
  export default settingsReducer;
  