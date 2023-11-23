import React from 'react';
import ThemeToggle from '../hooks/themeToggle';

const NavigationView = () => {
  return (
    <div className="bg-gray-800 dark:bg-slate-800 text-black dark:text-white h-screen w-64 top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <div className='flex gap-5'><h1 className="text-2xl font-semibold mb-4">Navigation</h1><ThemeToggle /></div>
        <ul>
          <li className="mb-2"><a href='/'>Home</a></li>
          <li className="mb-2"><a href='/reports'>Reports</a></li>
          <li className="mb-2"><a href='/analytics'>Analytics</a></li>
          <li className="mb-2"><a href='/settings'>Settings</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationView;
