import { ADD, EDIT, DELETE} from '../actions/todoActions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  const newState=[...state]
  switch (action.type) {
    case ADD :
      return [...state, action.message]
    case EDIT :
      newState[action.index] = action.message;
      return newState;
    case DELETE :
      newState.splice(action.index, 1)
      return newState;

    default:
   return state
  }
}

export default todoReducer; 