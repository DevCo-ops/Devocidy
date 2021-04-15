import { updateUser } from '../users/actions';

export const groupActionsTypes = {
  ALL_GROUPS: 'ALL_GROUPS',
  CREATE_GROUP: 'CREATE_GROUP',
  UPDATE_GROUP: 'UPDATE_GROUP',
  DELETE_GROUP_BY_ID: 'DELETE_GROUP_BY_ID',
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
        dispatch({ type: groupActionsTypes.ALL_GROUPS, groups });
      })
      .catch((err) => console.log('-----------------ERROR:  ', err));
  };
};

export const createGroup = (group, user) => {
  group.owner = user._id;
  group.users.push(user._id);
  user.ownedGroups.push(group._id);
  user.groups.push(group._id);
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
        dispatch({ type: groupActionsTypes.CREATE_GROUP, group });
        dispatch(updateUser(user));
      })
      .catch((err) => console.log('-----------------ERROR:  ', err));
  };
};

export const updateGroup = (group) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/groups/${group._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(group),
    })
      .then((res) => res.json())
      .then((group) => {
        dispatch({ type: groupActionsTypes.UPDATE_GROUP, group });
      })
      .catch((err) => console.log('-----------------ERROR:  ', err));
  };
};

export const findGroupById = (id) => {
  return (dispatch, getState) => {
    let groups = getState().groups.groups;
    let group = groups.filter((group) => group._id === id);

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
        dispatch({ type: groupActionsTypes.CREATE_GROUP, group });
      })
      .catch((err) => console.log('-----------------ERROR:  ', err));
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
        dispatch({ type: groupActionsTypes.DELETE_GROUP_BY_ID, id });
      })
      .catch((err) => console.log('-----------------ERROR:  ', err));
  };
};
