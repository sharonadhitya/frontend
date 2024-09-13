import React from 'react';

function WaterUsageChart({ title, value, percentage, status }) {
    const months = ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'];

    return (
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col px-8 pt-7 pb-10 mx-auto w-full bg-white rounded-3xl shadow-[12px_13px_26px_rgba(0,122,255,0.46)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col w-full max-md:mt-2.5">
                                <div className="flex overflow-hidden gap-1.5 self-start px-3 py-2.5 text-sm font-medium tracking-tight leading-loose bg-violet-50 rounded-lg text-slate-400">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a59677853687d1e15fe36f910ccb36081221f50a67e119875e9ceb160ea20b78?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="" className="object-contain shrink-0 aspect-square w-[18px]" />
                                    <div className="my-auto">{title}</div>
                                </div>
                                <div className="mt-4 text-5xl font-bold text-blue-500 max-md:mr-2 max-md:text-4xl">{value}</div>
                                <div className="flex gap-1 items-start mt-4">
                                    <div className="self-stretch text-sm font-medium tracking-tight leading-loose text-slate-400">Total Spent</div>
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e094b629f94edcaf8171aedbc0699dcd2cf4bac80c8aaf1f25b63d1a1893e688?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="" className="object-contain shrink-0 mt-1 w-5 aspect-[1.11]" />
                                    <div className="text-xs font-bold tracking-tight leading-loose text-center text-teal-500">{percentage}</div>
                                </div>
                                <div className="flex gap-2 self-start mt-6 text-base font-bold tracking-tight leading-loose text-teal-500">
                                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/14adfa8ab50b4f910f171947f194031db68ec7ba428bbc008f9ab36dac754a63?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="" className="object-contain shrink-0 w-4 aspect-square rounded-[46px]" />
                                    <div>{status}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col max-md:mt-3 max-md:max-w-full">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b255426bf83dda00a225540de09cc9b751fd91bf127a80433aef205c2714592?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="" className="object-contain z-10 self-end rounded-xl aspect-square w-[33px]" />
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c82c068f40a548c04e61a579fcd942537685e1158001c03bec70d760005c8bd5?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859" alt="Water usage chart" className="object-contain aspect-[4.33] shadow-[0px_13px_21px_rgba(67,24,255,0.25)] w-[428px] max-md:mr-2.5 max-md:max-w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between self-end mt-14 max-w-full text-xs font-medium tracking-tight leading-loose text-center whitespace-nowrap text-slate-400 w-[433px] max-md:mt-10 max-md:mr-2.5">
                    {months.map((month, index) => (
                        <div key={index}>{month}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WaterUsageChart;