import { userActionsTypes } from "./actions";

const initialState = {
  users: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case userActionsTypes.ALL:
      fetch('../../pages/api/users')
      .then(userData => {
        return {...state, users = userData}
      })

    case userActionsTypes.UPDATE_BY_ID:
    case userActionsTypes.UPDATE_BY_EMAIL:
    case userActionsTypes.FIND_BY_ID:
    case userActionsTypes.FIND_BY_EMAIL:

    default:
      return state;
  }
}
