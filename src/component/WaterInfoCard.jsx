import React from 'react';

const LegendItem = ({ color, label }) => (
  <div className={`flex gap-2.5 mt-1.5 rounded-sm ${label === 'Agriculture' ? 'w-[82px]' : label === 'Doesmetic' ? 'w-20' : 'w-[58px]'}`}>
    <div className={`flex shrink-0 my-auto w-2.5 h-2.5 ${color} rounded-sm`} />
    <div>{label}</div>
  </div>
);

const WaterInfoCard = ({ title, amount, unit }) => (
  <div className="flex flex-col py-4 mt-4 w-full bg-black rounded-3xl shadow-[0px_4px_10px_rgba(80,80,80,0.05)] max-md:max-w-full">
    <div className="flex gap-1.5 self-center ml-4 max-w-full w-[322px]">
      <div className="flex-auto text-4xl font-bold text-white">{title}</div>
      <div className="my-auto text-lg font-medium text-black">40 gal</div>
    </div>
    <div className="flex gap-9 self-start mt-5 max-md:ml-2.5">
      <div className="flex flex-auto gap-2.5">
        <div className="grow text-8xl font-bold text-blue-500 max-md:text-4xl">{amount}</div>
        <div className="self-end mt-12 text-xs text-amber-500 max-md:mt-10">
          <span className="font-medium">{unit}</span>
        </div>
      </div>
      <div className="flex flex-col self-start mt-2 text-xs whitespace-nowrap h-[19px] text-slate-400">
        <LegendItem color="bg-yellow-400" label="Agriculture" />
        <LegendItem color="bg-red-500" label="Doesmetic" />
        <LegendItem color="bg-purple-700" label="Others" />
      </div>
    </div>
  </div>
);

export default WaterInfoCard;