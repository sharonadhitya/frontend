import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';

const FilterDropdown = () => {
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [selectedItem3, setSelectedItem3] = useState(null);
  const [reservoir, setReservoir] = useState([]);  // For storing reservoir options
  const [selectedReservoir, setSelectedReservoir] = useState(null);  // For storing selected reservoir

  useEffect(() => {
    axios.get('https://balanced-connection-production.up.railway.app/api/reservoirs/')
      .then(response => {
        const transformedData = response.data.map(item => ({
          label: item.reservoir_name,  
          value: item.reservoir_name   
        }));
        setReservoir(transformedData);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

  return (
    <section className="flex flex-wrap gap-5 justify-between mt-9 w-full whitespace-nowrap max-w-[1358px] max-md:max-w-full">
      <Dropdown
        value={selectedItem1}
        onChange={(e) => setSelectedItem1(e.value)}
        options={items}
        virtualScrollerOptions={{ itemSize: 58 }}
        placeholder="State"
        className="w-full md:w-40 h-12 border-black border-2 px-5 py-2"
      />
      <Dropdown
        value={selectedItem2}
        onChange={(e) => setSelectedItem2(e.value)}
        options={items}
        virtualScrollerOptions={{ itemSize: 58 }}
        placeholder="City"
        className="w-full md:w-40 h-12 border-black border-2 px-5 py-2"
      />
      <Dropdown
        value={selectedItem3}
        onChange={(e) => setSelectedItem3(e.value)}
        options={items}
        virtualScrollerOptions={{ itemSize: 58 }}
        placeholder="District"
        className="w-full md:w-40 h-12 border-black border-2 px-5 py-2"
      /> 
      <Dropdown
        value={selectedReservoir}
        onChange={(e) => setSelectedReservoir(e.value)}
        options={reservoir}
        virtualScrollerOptions={{ itemSize: 58 }}
        placeholder="Reservoir"
        className="w-full md:w-40 h-12 border-black border-2 px-5 py-2"
      />
    </section>
  );
};

export default FilterDropdown;
