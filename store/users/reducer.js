import { userActionsTypes } from './actions';

const initialState = {
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case userActionsTypes.ALL:
      return { ...state, users: action.users };
      break;

    case userActionsTypes.UPDATE:
      let updateIndex = state.users.findIndex(
        (user) => user._id === action.user._id
      );
      return {
        ...state,
        users: [
          ...state.users.slice(0, updateIndex),
          action.user,
          ...state.users.slice(updateIndex + 1),
        ],
      };
      break;

    case userActionsTypes.FIND_BY_ID:
      return { ...state, users: state.users.concat(action.user) };
      break;

    case userActionsTypes.DELETE_BY_ID:
      return {
        ...state,
        users: [...state.users.filter((user) => user._id !== action.id)],
      };
      break;

    default:
      return state;
  }
}
