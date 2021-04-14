export const groupActionsTypes = {
  ALL: 'ALL',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE_BY_ID: 'DELETE_BY_ID',
};

export const getGroups = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/groups', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((groups) => {
        dispatch({ type: groupActionsTypes.ALL, groups });
      })
      .catch((err) => console.log('-----------------ERROR:  ', err));
  };
};

export const createGroup = (group) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(group),
    })
      .then((res) => res.json())
      .then((group) => {
        dispatch({ type: groupActionsTypes.CREATE, group });
      });
  };
};

export const updateGroup = (group) => (dispatch) => {
  fetch(`http://localhost:3000/api/groups/${group._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(group),
  })
    .then((res) => res.json())
    .then((group) => {
      dispatch({ type: groupActionsTypes.UPDATE, group });
    });
};

export const findGroupById = (id) => (dispatch, getState) => {
  const groups = getState().groups.groups;
  const group = groups.filter((group) => group._id === id);

  if (group) return group;

  fetch(`http://localhost:3000/api/groups/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((group) => {
      dispatch({ type: groupActionsTypes.CREATE, group });
    })
    .catch((err) => console.log('-----------------ERROR:  ', err));
};

export const deleteGroupById = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/groups/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((id) => {
        dispatch({ type: groupActionsTypes.DELETE_BY_ID, id });
      });
  };
};
