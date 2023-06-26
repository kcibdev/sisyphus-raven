import React from "react";
import "../styles/buysell.css";
import TextInput from "./TextInput";
import InputDropdown from "./InputDropdown";
import Button from "./Button";

const BottomSheet = () => {
  return (
    <div className="buy__sell--content">
      <div className="buysell__topTabs">
        <div className="top__tab">Buy</div>
        <div className="top__tab">Sell</div>
      </div>
      <div className="mini__tabs">
        <div className="mini__tab">Limit</div>
        <div className="mini__tab">Market</div>
        <div className="mini__tab">Stop-Limit</div>
      </div>
      <div className="bsht__inputs">
        <TextInput />
        <TextInput />
        <InputDropdown />
        <Button
          color={"linear-gradient(90deg, #483BEB 0%, #7847E1 48%, #DD568D 96%)"}
          content={"Buy BTC"}
        />
      </div>
    </div>
  );
};

export default BottomSheet;
