import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Form = ({ attributes,setForm,form }) => {
  const { label, type, options } = attributes;
  switch (type) {
    case "text":
      return (
        <div className="m-4">
            <TextField label={label} fullWidth onChange={(e)=>setForm({...form,[label]:e.target.value})} />
        </div>
      );
    case "select":
      return (
        <div className="m-4">
          <TextField select label={label} fullWidth onChange={(e)=>setForm({...form,[label]:e.target.value})}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      );
    default:
      return null;
  }
};

export default Form;
