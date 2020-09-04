import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

import selectors from "../redux/selectors";
import actions from "../redux/actions";

function Users({ getUsers, users, removeUser }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (!users) {
    return null;
  }

  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} removeUser={removeUser} />
      ))}
    </ul>
  );
}

const mapStateToProps = state => ({
  users: selectors.getUsersList(state)
});

const mapDispatchToProps = {
  getUsers: actions.getUsers,
  removeUser: actions.removeUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
