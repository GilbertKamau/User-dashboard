const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload;
    case 'ASSIGN_ROLE':
      return state.map((user) => 
        user.id === action.payload.userId ? { ...user, role: action.payload.role } : user
      );
    case 'UPDATE_PERMISSIONS':
      return state.map((user) => 
        user.id === action.payload.userId ? { ...user, permissions: action.payload.permissions } : user
      );
    case 'UPDATE_CREDENTIALS':
      return state.map((user) => 
        user.id === action.payload.userId ? { ...user, credentials: action.payload.credentials } : user
      );
    default:
      return state;
  }
};

export default userReducer;
