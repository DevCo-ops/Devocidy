import { groupActionsTypes } from './actions';

const initialState = {
  groups: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case groupActionsTypes.ALL:
      return { ...state, groups: action.data };
      break;

    case groupActionsTypes.CREATE:
      return { ...state, groups: state.groups.concat(action.data) };
      break;

    case groupActionsTypes.UPDATE:
      let updateIndex = state.groups.findIndex(
        (group) => group._id === action.data._id
      );
      return {
        ...state,
        groups: [
          ...state.groups.slice(0, updateIndex),
          action.data,
          ...state.groups.slice(updateIndex + 1),
        ],
      };
      break;

    // case groupActionsTypes.FIND_BY_ID:

    case groupActionsTypes.DELETE_BY_ID:
      return {
        ...state,
        groups: [...state.groups.filter((group) => group._id !== action.id)],
      };
      break;

    default:
      return state;
  }
}
