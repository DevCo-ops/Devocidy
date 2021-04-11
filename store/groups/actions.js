export const groupActionsTypes = {
  ALL: 'ALL',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE_BY_ID: 'DELETE_BY_ID',
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

export const createGroup = (data) => {
  return async (dispatch) => {
    fetch('http://localhost:3000/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: groupActionsTypes.CREATE, data });
      });
  };
};

export const updateGroup = (data) => {
  return async (dispatch) => {
    fetch(`http://localhost:3000/api/groups/${data._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: groupActionsTypes.UPDATE, data });
      });
  };
};

export const findGroupById = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3000/api/groups/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: groupActionsTypes.FIND_BY_ID, data });
      });
  };
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
