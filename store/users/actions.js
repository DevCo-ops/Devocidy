export const userActionsTypes = {
  ALL: "ALL",
  UPDATE_BY_ID: "UPDATE_BY_ID",
  UPDATE_BY_EMAIL: "UPDATE_BY_EMAIL",
  FIND_BY_ID: "FIND_BY_ID",
  FIND_BY_EMAIL: "FIND_BY_EMAIL",
};

export const getUsers = () => (dispatch) => {
  return dispatch({ type: userActionsTypes.ALL });
};

export const updateUserById = (id) => (dispatch) => {
  return dispatch({ type: userActionsTypes.UPDATE_BY_ID, id });
};

export const updateUserByEmail = (email) => (dispatch) => {
  return dispatch({ type: userActionsTypes.UPDATE_BY_EMAIL, email });
};

export const findUserById = (id) => (dispatch) => {
  return dispatch({ type: userActionsTypes.FIND_BY_ID, id });
};

export const findUserByEmail = (email) => (dispatch) => {
  return dispatch({ type: userActionsTypes.FIND_BY_EMAIL, email });
};
