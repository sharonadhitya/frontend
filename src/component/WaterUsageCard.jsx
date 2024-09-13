import React from 'react';

function WaterUsageCard({ title, value, limit, percentage }) {
    const sectors = [
        { name: 'Agriculture', color: 'bg-yellow-400', usage: '23%' },
        { name: 'Doesmetic', color: 'bg-red-500', usage: '98%' },
        { name: 'Others', color: 'bg-purple-700', usage: '67%' },
    ];

    return (
        <div className="flex flex-col w-6/12 h-full ml-[30px] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col  justify-center file:w-full h-full rounded-3xl shadow-[12px_13px_26px_rgba(0,122,255,0.46)] max-md:mt-10 max-md:max-w-full">
                {/* NUMBER */}
                <div className="pt-2 pr-8  pl-8 max-w-full bg-white w-[654px] max-md:px-5 max-md:pb-24">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-2 max-md:mt-10">
                                <div className="self-start text-xs text-slate-400 max-md:ml-2">{title}</div>
                                <div className="mt-3 text-8xl font-bold text-blue-500 max-md:text-4xl">{value}</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col w-full max-md:mt-9">
                                <div className="flex items-start self-end max-w-full w-[106px]">
                                    <div className="flex flex-col">
                                        <div className="text-xs text-slate-400">Water limit</div>
                                        <div className="self-start text-lg font-medium text-black">{limit} gal</div>
                                    </div>
                                    <div className="gap-2.5 self-stretch px-3 py-2 mt-3.5 text-xs text-center text-white whitespace-nowrap bg-blue-500 rounded-3xl">
                                        {percentage}%
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-5 max-w-full text-xs w-[193px]">
                                    <div className="my-auto text-amber-500">
                                        <span className="font-medium">galH</span>
                                        <span className="font-medium">2</span>
                                        <span className="font-medium">O</span>
                                    </div>
                                    <div className="flex flex-col whitespace-nowrap min-h-[55px] text-slate-400">
                                        {sectors.map((sector, index) => (
                                            <div key={index} className="flex gap-2.5 mt-1.5 rounded-sm">
                                                <div className={`flex shrink-0 my-auto w-2.5 h-2.5 ${sector.color} rounded-sm`} />
                                                <div>{sector.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SECTORS */}
                <div className="flex flex-col py-3 pl-4 w-full font-medium  bg-white  max-w-[654px] shadow-[0px_4px_10px_rgba(80,80,80,0.05)] max-md:max-w-full">
                    <div className="flex gap-5 justify-between max-w-full text-sm text-black w-[229px]">
                        <div>sector</div>
                        <div>Water use</div>
                    </div>
                    <div className="flex flex-col mt-2.5 w-full whitespace-nowrap text-slate-400 max-md:max-w-full">
                        {sectors.map((sector, index) => (
                            <div key={index} className="flex flex-wrap gap-10 py-1 pr-20 mt-2.5 w-full max-md:pr-5 max-md:max-w-full">
                                <div className="flex gap-4 text-sm">
                                    <img loading="lazy" src={`http://b.io/ext_${7 + index}-`} alt="" className="object-contain shrink-0 aspect-square rounded-[200px] w-[35px]" />
                                    <div className="my-auto">{sector.name}</div>
                                </div>
                                <div className="flex flex-auto gap-10 my-auto text-xs text-right">
                                    <div className={`flex shrink-0 my-auto max-w-full h-1 rounded-sm ${sector.color} bg-opacity-20 w-[273px]`} />
                                    <div>{sector.usage}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaterUsageCard;