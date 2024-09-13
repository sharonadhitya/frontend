import React, { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import DateFilter from "./DateFilter";


function Selection_Dropdown() {

    return (
        <div className="container mx-auto px-4">
            <section className="flex flex-wrap gap-10 justify-between items-center  w-full text-2xl tracking-tight leading-none text-black whitespace-nowrap max-w-[1382px]">
                <FilterDropdown />
            </section>

            <DateFilter />
        </div>
    );
}



export default Selection_Dropdown;