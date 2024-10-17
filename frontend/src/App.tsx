import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LoanStatusPage from './components/LoanStatusPage';


function App() {
  const [role, setRole] = useState<'user' | 'admin'>('user'); 

  return (
    <div>
      <Navbar setRole={setRole} /> 
      <div className="flex w-full">
       
        <div className="flex-1 p-6">
          {role === 'admin' ?  <div className="flex w-full" id='admin'> 
      
     
      <div className="w-64">
        <Sidebar />
      </div>

      
      <div className="flex-1 p-6">
        <Dashboard />
      </div>
    </div>: <LoanStatusPage />}
        </div>
      </div>
    </div>
  );
}

export default App;
