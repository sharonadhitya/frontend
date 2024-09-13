import React from 'react';
import WaterInfoCard from './WaterInfoCard';

const ScenarioSection = ({ title }) => (
  <section className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
    <h2 className="self-center text-4xl font-black text-black">{title}</h2>
    <WaterInfoCard title="Water Demand" amount="35.25" unit="galH2O" />
    <div className="shrink-0 mt-3 border-white border-solid border-[9px] h-[9px] max-md:max-w-full" />
    <WaterInfoCard title="Water Storage" amount="35.25" unit="galH2O" />
    {title === 'Normal Scenario' && (
      <div className="self-start mt-5 ml-3 text-4xl font-black text-black max-md:ml-2.5">
        Precautions :
      </div>
    )}
  </section>
);

export default ScenarioSection;