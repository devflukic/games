import React, { useRef } from "react";
import { connect } from "react-redux";

import { useOutsideClick } from "../../utils";
import actions from "../../redux/actions";

function Dialog({ title, showDialog, children }) {
  const ref = useRef();

  useOutsideClick(ref, () => {
    showDialog(false);
  });

  return (
    <div ref={ref} className="dialog">
      <div className="dialog-title">{title}</div>
      <div className="dialog-body">{children}</div>
    </div>
  );
}

const mapDispatchToProps = {
  showDialog: actions.showDialog
};

export default connect(
  null,
  mapDispatchToProps
)(Dialog);
