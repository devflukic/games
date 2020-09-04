import React, { useState } from "react";
import { connect } from "react-redux";

import Dialog from "./shared/Dialog";
import Input from "./shared/Input";
import Button from "./shared/Button";

import actions from "../redux/actions";
import selectors from "../redux/selectors";

function FilterUsers({ dialog, setSearchDialog, showDialog }) {
  const { minPoints, maxPoints, available } = dialog;

  const [inputValues, setInputValues] = useState({
    minPoints: minPoints,
    maxPoints: maxPoints,
    available: available
  });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setInputValues({ ...inputValues, [name]: checked });
  };

  const submit = e => {
    e.preventDefault();
    const searchDialog = {
      ...inputValues
    };
    setSearchDialog(searchDialog);
    showDialog(false);
  };

  return (
    <Dialog title="Filter your search">
      <form onSubmit={submit} className="filter-users-form">
        <div className="inputs-wrapper">
          <Input
            min="0"
            max="100"
            name="minPoints"
            type="number"
            className="dialog-input"
            placeholder="Min"
            label="Avg. Points"
            defaultValue={minPoints}
            onChange={handleOnChange}
          />
          <Input
            min="0"
            max="100"
            name="maxPoints"
            type="number"
            className="dialog-input"
            placeholder="Max"
            defaultValue={maxPoints}
            onChange={handleOnChange}
          />
        </div>
        <Input
          name="available"
          type="checkbox"
          className="dialog-checkbox"
          label="Available"
          defaultChecked={available}
          onChange={handleCheckboxChange}
        />
        <Button type="submit" text="Filter" className="dialog-button" />
      </form>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  dialog: selectors.getSearchDialog(state)
});

const mapDispatchToProps = {
  setSearchDialog: actions.setSearchDialog,
  showDialog: actions.showDialog
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterUsers);
