import React from "react";
import TextInput from "../TextInput";
import InputDropdown from "../InputDropdown";
import CheckButton from "../RadioInput";

const Limit = () => {
  return (
    <>
      <TextInput leftTitle="Limit Price" />
      <TextInput leftTitle="Amount" />
      <InputDropdown leftTitle="Type" />
      <div className="">
        <CheckButton title={"Post"} />
      </div>
    </>
  );
};

export default Limit;
