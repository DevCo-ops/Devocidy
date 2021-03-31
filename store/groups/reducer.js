import { groupActionsTypes } from "./actions";

const initialState = {
  groups: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case groupActionsTypes.ALL:
      fetch("../../pages/api/groups").then((groupData) => {
        return { ...state, groups: groupData };
      });

    case groupActionsTypes.UPDATE_BY_ID:
    case groupActionsTypes.UPDATE_BY_EMAIL:
    case groupActionsTypes.FIND_BY_ID:
    case groupActionsTypes.FIND_BY_EMAIL:

    default:
      return state;
  }
}
