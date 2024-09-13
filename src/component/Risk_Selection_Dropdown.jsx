import React from "react";
import FilterDropdown from "./FilterDropdown";
import DateFilter from "./DateFilter";

function Risk_Selection_Dropdown() {
    return (
        <div className="container mx-auto px-4">
            <section className="flex flex-wrap gap-10 justify-between items-center  w-full text-2xl tracking-tight leading-none text-black whitespace-nowrap max-w-[1382px]">
                <FilterDropdown />
            </section>
            <section className="flex justify-between items-center mt-8 w-full max-w-[1382px]">
                <div className="flex flex-row gap-[500px] w-full">
                    <div className="flex-1">
                        <DateFilter />
                    </div>
                    <div className="flex-1">
                        <DateFilter />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Risk_Selection_Dropdown;
