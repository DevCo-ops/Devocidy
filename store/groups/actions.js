export const groupActionsTypes = {
  ALL: 'ALL',
  UPDATE: 'UPDATE',
  FIND_BY_ID: 'FIND_BY_ID',
};

export const getGroups = () => {
  return async (dispatch) => {
    await fetch('http://localhost:3000/api/groups', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: groupActionsTypes.ALL, data });
      })
      .catch((err) => console.log('-----------------ERROR:  ', err));
  };
};

export const updateGroup = (data) => (dispatch) => {
  fetch(`http://localhost:3000/api/groups/${action.data._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.data),
  })
    .then((res) => res.json())
    .then((group) => {
      dispatch({ type: groupActionsTypes.UPDATE, data });
    });
};

export const findGroupById = (id) => (dispatch) => {
  return dispatch({ type: groupActionsTypes.FIND_BY_ID, id });
};
