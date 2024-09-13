import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

function DateFilter() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // Array of month names
  const months = [
    { label: 'January', value: 1 },
    { label: 'February', value: 2 },
    { label: 'March', value: 3 },
    { label: 'April', value: 4 },
    { label: 'May', value: 5 },
    { label: 'June', value: 6 },
    { label: 'July', value: 7 },
    { label: 'August', value: 8 },
    { label: 'September', value: 9 },
    { label: 'October', value: 10 },
    { label: 'November', value: 11 },
    { label: 'December', value: 12 }
  ];

  // Array of years (example from 2024 to 1924)
  const years = Array.from({ length: 100 }).map((_, i) => ({
    label: `Year ${2024 - i}`, // Adjust the base year as needed
    value: 2024 - i
  }));

  return (
    <section className="flex flex-wrap gap-10 justify-between items-center mt-4 w-min text-2xl tracking-tight leading-none text-black whitespace-nowrap max-w-[1382px]">
      <div className="card flex justify-content-center">
        <div className="flex flex-row gap-[100px]">
          {/* Month */}
          <Dropdown
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.value)}
            options={months}
            virtualScrollerOptions={{ itemSize: 58 }}
            placeholder="Month"
            className="w-full md:w-40 h-12 border-black border-2 px-5 py-2"
          />
          {/* Year */}
          <Dropdown
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.value)}
            options={years}
            virtualScrollerOptions={{ itemSize: 58 }}
            placeholder="Year"
            className="w-full md:w-40 h-12 border-black border-2 px-5 py-2"
          />
        </div>
      </div>
    </section>
  );
}

export default DateFilter;
