export const groupActionsTypes = {
  ALL: "ALL",
  UPDATE_BY_ID: "UPDATE_BY_ID",
  UPDATE_BY_EMAIL: "UPDATE_BY_EMAIL",
  FIND_BY_ID: "FIND_BY_ID",
  FIND_BY_EMAIL: "FIND_BY_EMAIL",
};

export const getGroups = () => (dispatch) => {
  return dispatch({ type: groupActionsTypes.ALL });
};

export const updateGroupById = (id) => (dispatch) => {
  return dispatch({ type: groupActionsTypes.UPDATE_BY_ID, id });
};

export const updateGroupByEmail = (email) => (dispatch) => {
  return dispatch({ type: groupActionsTypes.UPDATE_BY_EMAIL, email });
};

export const findGroupById = (id) => (dispatch) => {
  return dispatch({ type: groupActionsTypes.FIND_BY_ID, id });
};

export const findGroupByEmail = (email) => (dispatch) => {
  return dispatch({ type: groupActionsTypes.FIND_BY_EMAIL, email });
};
