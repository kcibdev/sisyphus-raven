import React from "react";
import TextInput from "../TextInput";
import InputDropdown from "../InputDropdown";

const Stop = () => {
  return (
    <>
      <TextInput leftTitle="Trigger Price" />
      <TextInput leftTitle="Limit Price" />
      <TextInput leftTitle="Amount" />
      <InputDropdown leftTitle="Type" />
    </>
  );
};

export default Stop;
