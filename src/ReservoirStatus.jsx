import React, { useState } from "react";
import Selection_Dropdown from './component/Risk_Selection_Dropdown';
import ReservoirMainContent from "./component/ReservoirMainContent";

const ReservoirStatus = () => {
  return (
    <div className="flex overflow-hidden flex-col px-9 py-9 bg-white max-md:px-5">

      <Selection_Dropdown />

      <ReservoirMainContent />
    </div>
  );
};

export default ReservoirStatus;