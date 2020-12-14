const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { 
        ...state,
        currentUser: action.payload // {id: "YjVlIIWfNNY1mSuhGn162ek7OCb2", createdAt: t, email: "mail@gmail.com", displayName: "Sean"}
      }
    default:
      return state
  }
}

export default userReducer