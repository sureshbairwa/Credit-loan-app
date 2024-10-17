import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-green-700 text-white h-screen flex flex-col">
      

      <div className="p-4 flex items-center space-x-3">
 
        <div className="rounded-full w-10 h-10 bg-purple-500"></div>
        <span>John Doe</span>
      </div>

      <nav className="flex-grow">
        <ul className=" p-4">
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Dashboard</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Borrowers</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Loans</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Repayments</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Loan Parameters</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Accounting</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Reports</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">collateral</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Access configuration</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Savings</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Expenses</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">E-signature</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Invester Accounts</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Calender</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Settings</a>
          </li>
          <li>
            <a href="#" className="hover:bg-green-600 block px-4 py-2 rounded-md">Sign out</a>
          </li>
        </ul>
      </nav>

      
    </aside>
  );
};

export default Sidebar;
