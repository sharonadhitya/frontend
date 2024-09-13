import React from "react";
import Selection_Dropdown from "./component/Selection_Dropdown.jsx";

import MainContent from "./component/MainContent.jsx";

const ScenarioPlanning = () => {
  return (
    <main className="flex overflow-hidden flex-col px-8  bg-white max-md:px-5">
      <Selection_Dropdown />
      <MainContent />
    </main>
  );
};

export default ScenarioPlanning;
