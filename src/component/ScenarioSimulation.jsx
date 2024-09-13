import React from 'react';

const ScenarioSimulation = () => {
    const bars = [
        { inflow: 57, outflow: 84 },
        { inflow: 102, outflow: 121 },
        { inflow: 84, outflow: 111 },
        { inflow: 83, outflow: 97 },
        { inflow: 138, outflow: 164 },
        { inflow: 66, outflow: 80 },
        { inflow: 88, outflow: 105 },
    ];

    return (
        <div className="flex overflow-hidden flex-col items-start px-4 py-5 mx-auto w-full bg-white rounded-3xl shadow-[13px_18px_26px_rgba(0,122,255,0.46)] max-md:pr-5 max-md:mt-10">
            <h3 className="text-base font-bold tracking-tight leading-loose text-indigo-900">Scenario simulations</h3>
            <div className="flex z-10 gap-3.5 items-end self-center mt-6 w-full">
                {bars.map((bar, index) => (
                    <div key={index} className={`flex flex-1 gap-1.5 ${index === 4 ? 'self-stretch' : `mt-${[20, 11, 14, 16, 0, 20, 14][index]} max-md:mt-10`}`}>
                        <div className={`flex shrink-0 ${index % 2 === 0 ? 'self-end mt-7' : 'self-start mt-3.5'} w-2 bg-indigo-600 ${bar.inflow > 100 ? `h-[${bar.inflow}px] rounded-[100px_100px_0px_0px]` : `rounded-none h-[${bar.inflow}px]`}`} />
                        <div className={`flex shrink-0 w-2 bg-amber-500 ${bar.outflow > 100 ? `h-[${bar.outflow}px] rounded-[100px_100px_0px_0px]` : `rounded-none h-[${bar.outflow}px]`}`} />
                    </div>
                ))}
            </div>
            <div className="flex overflow-hidden flex-col px-10 py-6 ml-4 w-full leading-loose whitespace-nowrap bg-white rounded-2xl max-md:px-5 max-md:ml-2.5">
                <div className="flex gap-10 text-xs font-medium tracking-tight text-slate-400">
                    <div className="flex flex-1 gap-1.5">
                        <div className="flex shrink-0 self-start w-2 h-2 bg-indigo-600 rounded-full" />
                        <div>Inflow</div>
                    </div>
                    <div className="flex flex-1 gap-1.5">
                        <div className="flex shrink-0 self-start w-2 h-2 bg-sky-300 rounded-full" />
                        <div>Outflow</div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between self-center mt-2 max-w-full text-lg font-bold tracking-tight text-indigo-900 w-[122px]">
                    <div>63%</div>
                    <div>25%</div>
                </div>
            </div>
        </div>
    );
};

export default ScenarioSimulation;