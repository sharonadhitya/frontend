import React from 'react';
import PrecipitationChart from './component/charts/PrecipitationChart';
import WaterUsageCard from './component/WaterUsageCard';
import WaterUsageChart from './component/WaterUsageChart';
import Selection_Dropdown from './component/Selection_Dropdown';

function WaterManagementDashboard() {
    return (
        <main className="flex overflow-hidden flex-col items-center px-9 py-9 bg-white max-md:px-5">
            <Selection_Dropdown />
            <section className="  "> {/* Added gap between sections */}
                <section className="mt-7 w-full max-w-[1382px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <WaterUsageCard title="All used water" value="35.25" limit="40" percentage="19" />
                        <WaterUsageCard title="All used water" value="35.25" limit="40" percentage="19" />
                        
                    </div>
                </section>
                <section className="mt-7 w-full max-w-[1382px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <WaterUsageChart title="This month" value="35.25" percentage="+2.45%" status="On track" />
                        <WaterUsageChart title="This month" value="35.25" percentage="+2.45%" status="On track" />
                    </div>
                </section>
            </section>
        </main>
    );
}

export default WaterManagementDashboard;
