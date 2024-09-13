import React, { useState } from "react";
import 'primereact/resources/themes/saga-blue/theme.css'; // PrimeReact theme
import 'primereact/resources/primereact.min.css';         // PrimeReact core
import 'primeicons/primeicons.css';
import Selection_Dropdown from './component/Selection_Dropdown.jsx'

function ReportsExports() {


  const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

  return (
    <main className="flex overflow-hidden flex-col px-8  bg-white max-md:px-5">
      <Selection_Dropdown />
    </main>
  );
}

export default ReportsExports;
