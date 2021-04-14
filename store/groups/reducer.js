import { groupActionsTypes } from './actions';

const initialState = {
  groups: [],
};

export default async function reducer(state = initialState, action) {
  switch (action.type) {
    case groupActionsTypes.ALL:
      return { ...state, groups: action.groups };
      break;

    case groupActionsTypes.CREATE:
      return { ...state, groups: state.groups.concat(action.data) };
      break;

    case groupActionsTypes.CREATE:
      return { ...state, groups: state.groups.concat(action.data) };
      break;

    case groupActionsTypes.UPDATE:
      let updateIndex = state.groups.findIndex(
        (group) => group._id === action.group._id
      );
      return {
        ...state,
        groups: [
          ...state.groups.slice(0, updateIndex),
          action.group,
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
