import React, { useState } from "react";
import { connect } from "react-redux";

import actions from "../redux/actions";

import Dialog from "./shared/Dialog";
import Input from "./shared/Input";
import Button from "./shared/Button";

function AddNewUser({ addUser, showDialog }) {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    available: false
  });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setInputValues({ ...inputValues, [name]: checked });
  };

  function getRandomId() {
    return Math.random()
      .toString(36)
      .substring(2, 10);
  }

  const submit = () => {
    const user = {
      id: getRandomId(),
      ...inputValues
    };
    addUser(user);
    showDialog(false);
  };

  return (
    <Dialog title="Add a New Player">
      <form onSubmit={submit}>
        <Input
          name="firstName"
          className="dialog-input"
          placeholder="First Name"
          required={true}
          onChange={handleOnChange}
        />
        <Input
          name="lastName"
          className="dialog-input"
          placeholder="Last Name"
          required={true}
          onChange={handleOnChange}
        />
        <Input
          name="available"
          type="checkbox"
          className="dialog-checkbox"
          label="Available"
          onChange={handleCheckboxChange}
        />
        <Button type="submit" text="Create" className="dialog-button" />
      </form>
    </Dialog>
  );
}

const mapDispatchToProps = {
  addUser: actions.addUser,
  showDialog: actions.showDialog
};

export default connect(
  null,
  mapDispatchToProps
)(AddNewUser);
