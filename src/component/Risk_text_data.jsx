import React from 'react';

const RiskAssessment = () => {
  return (
    <section className="flex flex-col grow items-start pt-7 pr-20 pb-36 pl-8 w-full text-black bg-stone-300 max-md:px-5 max-md:pb-24 max-md:mt-9 max-md:max-w-full">
      <h2 className="text-6xl max-md:text-4xl">Risk Assessment:</h2>
      <div className="mt-10 text-3xl max-md:max-w-full">
        Water Demand Forecast: <br /> <br />
        Projected Demand: (Next 6 months) <br />
        Current Reservoir Capacity: 900 million liters <br />
        Deficit: 300 million liters (High Risk of Water Shortage) <br />
        Regions at Risk: <br />
        City A: 150 million liters deficit (Very High Risk) <br />
        City B: 80 million liters deficit (High Risk) <br /> <br /> <br />
        Region A: Imminent water shortage in 3 weeks. <br />
        Reservoir Y: Maintenance due in 2 months.
      </div>
    </section>
  );
};

export default RiskAssessment;