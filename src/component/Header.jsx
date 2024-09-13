import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { label: 'HOME', path: '/', width: 'w-[67px]' },
    { label: 'Water Forecast', path: '/waterforecast', width: 'w-[190px]' },
    { label: 'Reservoir Status', path: '/reservoirstatus', width: 'w-[180px]' },
    { label: 'Risk Assessment', path: '/riskassessment', width: 'w-[170px]' },
    { label: 'Scenario Planning', path: '/scenarioplanning', width: 'w-[193px]' },
    { label: 'Reports & Exports', path: '/reports', width: 'w-[194px]' },
  ];

  return (
    <header className="flex overflow-hidden flex-wrap gap-10 px-20 pt-7 pb-3 mr-3 max-w-screen text-xl text-center text-black bg-white rounded-3xl shadow-[0px_-8px_26px_rgba(0,122,255,0.46)] max-md:px-5 max-md:mr-2.5 mx-10 mt-8">
      <div className="grow my-auto">WELCOME !</div>
      <nav className="flex flex-wrap gap-7 justify-between items-center">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className={`self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap ${item.width}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
