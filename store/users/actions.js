import { deleteGroupById, updateGroup } from '../groups/actions';

export const userActionsTypes = {
  ALL_USERS: 'ALL_USERS',
  UPDATE_USER: 'UPDATE',
  FIND_USER_BY_ID: 'FIND_USER_BY_ID',
  DELETE_USER_BY_ID: 'DELETE_BY_ID',
  ADD_GROUP: 'ADD_GROUP',
};

export const getUsers = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((users) => {
        dispatch({ type: userActionsTypes.ALL_USERS, users });
      })
      .catch((err) => console.log('-----------------ERROR:  ', err));
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/users/${user._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((user) => {
        dispatch({ type: userActionsTypes.UPDATE_USER, user });
      });
  };
};

export const findUserById = (id) => {
  return (dispatch, getState) => {
    const users = getState().users.users;
    const user = users.filter((user) => user._id === id);

    if (user) return user;

    fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((user) => {
        dispatch({ type: userActionsTypes.FIND_USER_BY_ID, user });
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
        dispatch({ type: userActionsTypes.DELETE_USER_BY_ID, id });
      });
  };
};

export const addUserToGroup = (group, user) => {
  user.groups.push(group._id);
  group.users.push(user._id);

  return (dispatch) => {
    dispatch(updateUser(user));
    dispatch(updateGroup(group));
  };
};

export const removeUserFromGroup = (group, user) => {
  user.groups.filter((u) => u._id !== user._id);
  group.users.filter((g) => g._id !== group._id);

  return (dispatch) => {
    dispatch(updateUser(user));
    dispatch(updateGroup(group));
  };
};

export const deleteUserOwnedGroup = (group, user) => {
  user.ownedGroups.filter((u) => u._id !== user._id);
  return (dispatch) => {
    dispatch(updateUser(user));
    dispatch(deleteGroupById(group._id));
  };
};

export const tansferGroupOwnership = (owner, group, user) => {
  owner.ownedGroups.filter((g) => g._id !== group._id);
  group.owner = user._id;
  user.ownedGroups.push(group._id);

  return (dispatch) => {
    dispatch(updateUser(user));
    dispatch(updateUser(owner));
    dispatch(updateGroup(group));
  };
};
