import React from 'react';
import ScenarioSection from './Scenario_text_section';
import GaugeChart from './charts/Score';
import SideBar from './charts/SideBar';

const MainContent = () => (
  <main className="mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col px-6 pt-2 pb-20 mx-auto w-full bg-stone-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <ScenarioSection title="Normal Scenario" />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <ScenarioSection title="Selected Scenario" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-start mt-6 text-3xl text-black max-md:max-w-full">
          cted Demand: 1,200 million liters/day (Next 6 months) <br />
          Current Reservoir Capacity: 900 million liters <br />
          Deficit: 300 million liters (High Risk of Water Shortage) <br />
          Regions at Risk: <br />
        </div>
      </div>
      <aside className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow mt-3 font-bold text-black max-md:mt-10">
          <div className="px-14 pt-2.5 text-5xl tracking-tighter leading-none bg-stone-300 max-md:px-5 max-md:pb-28 max-md:text-4xl">
            Scenario Score
            <GaugeChart/> 
          </div>
          <div className="px-1 pt-5 pb-20 mt-7 text-4xl tracking-tighter leading-none bg-stone-300 max-md:pr-5 max-md:pb-28">
            Factors affecting the scenario:
            <SideBar/>
          </div>
        </div>
      </aside>
    </div>
  </main>
);

export default MainContent;