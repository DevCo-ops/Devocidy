export const userActionsTypes = {
  ALL: 'ALL',
  UPDATE: 'UPDATE',
  DELETE_BY_ID: 'DELETE_BY_ID',
};

export const getUsers = () => {
  return async (dispatch) => {
    await fetch('http://localhost:3000/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((users) => {
        dispatch({ type: userActionsTypes.ALL, users });
      })
      .catch((err) => console.log('-----------------ERROR:  ', err));
  };
};

export const updateUser = (data) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3000/api/users/${data._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => {
        dispatch({ type: userActionsTypes.UPDATE, user });
      });
  };
};

export const findUserById = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((user) => {
        dispatch({ type: userActionsTypes.FIND_BY_ID, user });
      });
  };
};

export const deleteUserById = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((id) => {
        dispatch({ type: userActionsTypes.DELETE_BY_ID, id });
      });
  };
};
