import React from 'react';

const ChartCard = ({ title, chartImage, legend }) => {
  return (
    <div className="flex overflow-hidden flex-col p-5 mx-auto w-full bg-white rounded-3xl shadow-[13px_18px_26px_rgba(0,122,255,0.46)] max-md:mt-4">
      <div className="flex gap-5 justify-between w-full font-bold">
        <div className="text-base tracking-tight leading-loose text-indigo-900">{title}</div>
        <div className="flex gap-0.5 self-start text-xs tracking-tight leading-loose whitespace-nowrap text-slate-400">
          <div className="grow">Monthly</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/71821bcfe81efe19a3a607155b3d0dd1fa36d27714934a3c16da420337fb2500?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="" className="object-contain shrink-0 self-start aspect-square w-[19px]" />
        </div>
      </div>
      <img loading="lazy" src={chartImage} alt={`Chart for ${title}`} className="object-contain self-center mt-5 max-w-full aspect-square w-[143px]" />
      <div className="flex overflow-hidden flex-col px-10 py-6 mx-3.5 leading-loose whitespace-nowrap bg-white rounded-2xl max-md:px-5 max-md:mx-2.5">
        <div className="flex gap-10 text-xs font-medium tracking-tight text-slate-400">
          {legend.map((item, index) => (
            <div key={index} className="flex flex-1 gap-1.5">
              <div className={`flex shrink-0 self-start w-2 h-2 ${item.color} rounded-full`} />
              <div>{item.label}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-between self-center mt-2 max-w-full text-lg font-bold tracking-tight text-indigo-900 w-[122px]">
          <div>{legend[0].value}</div>
          <div>{legend[1].value}</div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;