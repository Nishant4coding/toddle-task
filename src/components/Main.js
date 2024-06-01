import React from "react";
import Dropdown from "../custom/Dropdown";

function Main() {
  return (
    <div className="p-4 flex flex-row justify-content items-center gap-60">
        <h1 className="font-bold text-3xl">Course Builder</h1>
        
     <Dropdown/>
    </div>
  );
}

export default Main;
