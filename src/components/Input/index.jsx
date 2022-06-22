import React from "react";

export const InputForm = ({ type, name, ...rest }) => {
  return (
    <div>
      <input type={type} name={name} id="" {...rest} />
    </div>
  );
};
