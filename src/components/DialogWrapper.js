import React from "react";
import { connect } from "react-redux";

import AddNewUser from "./AddNewUser.js";
import FilterUsers from "./FilterUsers.js";

import selectors from "../redux/selectors";

function DialogWrapper({ dialog }) {
  if (!dialog.show) {
    return null;
  }

  return (
    <div className="dialog-wrapper">
      {dialog.type === "add_user" ? <AddNewUser /> : <FilterUsers />}
    </div>
  );
}

const mapStateToProps = state => ({
  dialog: selectors.getDialog(state)
});

export default connect(
  mapStateToProps,
  null
)(DialogWrapper);
