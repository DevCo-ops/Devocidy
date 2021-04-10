import { groupActionsTypes } from './actions';

const initialState = {
  groups: [],
};

export default async function reducer(state = initialState, action) {
  switch (action.type) {
    case groupActionsTypes.ALL:
      return { ...state, groups: action.data };
      break;

    case groupActionsTypes.UPDATE:
      return { ...state, groups: { ...state.groups, group } };
      break;

    case groupActionsTypes.FIND_BY_ID:
      break;

    default:
      return state;
  }
}
