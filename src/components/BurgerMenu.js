import React from "react";
import { connect } from "react-redux";

import actions from "../redux/actions";

function BurgerMenu({ showDialog }) {
  const displayDialog = () => {
    showDialog("filter");
  };
  return (
    <button onClick={displayDialog} className="burger_menu">
      <img
        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/filter-1774652-1509116.png"
        alt="burger-menu"
      />
    </button>
  );
}

const mapDispatchToProps = {
  showDialog: actions.showDialog
};

export default connect(
  null,
  mapDispatchToProps
)(BurgerMenu);
