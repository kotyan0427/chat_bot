import React from "react";
import TextField from "@material-ui/core/TextField";

export const TextInput = ({ label, multiline, rows, value, type, onChange }) => {
  return (
    <TextField
      fullWidth={true}
      id="standard-basic"
      label={label}
      margin={"dense"}
      multiline={multiline}
      row={rows}
      value={value}
      type={type}
      onChange={onChange}
    />
  );
};
