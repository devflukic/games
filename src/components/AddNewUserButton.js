import React from "react";
import { connect } from "react-redux";

import actions from "../redux/actions";

function AddNewUserButton({ showDialog }) {
  const displayDialog = () => {
    showDialog("add_user");
  };
  return (
    <button onClick={displayDialog} className="add_new_user_btn">
      +
    </button>
  );
}

const mapDispatchToProps = {
  showDialog: actions.showDialog
};

export default connect(
  null,
  mapDispatchToProps
)(AddNewUserButton);
