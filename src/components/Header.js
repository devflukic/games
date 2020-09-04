import React from "react";
import { connect } from "react-redux";

import Input from "./shared/Input";
import BurgerMenu from "./BurgerMenu";

import actions from "../redux/actions";

function Header({ setSearchString }) {
  const onChange = e => {
    setSearchString(e.target.value);
  };
  return (
    <header>
      <Input placeholder="Search..." onChange={onChange} />
      <BurgerMenu />
    </header>
  );
}

const mapDispatchToProps = {
  setSearchString: actions.setSearchString
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
