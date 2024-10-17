import React from 'react';
import RecentLoans from './RecentLoans';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Active Users', value: 200 },
    { title: 'Borrowers', value: 100 },
    { title: 'Cash Disbursed', value: '₦550,000' },
    { title: 'Cash Received', value: '₦1,000,000' },
    { title: 'Savings', value: '₦450,000' },
    { title: 'Repaid Loans', value: 30 },
    { title: 'Other Accounts', value: 10 },
    { title: 'Loans', value: 50 },
  ];



  return (
    <div className=" ">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-md  rounded-lg">
            <div className='flex items-center   ' >
              <div className='bg-green-600 h-[90px] w-[90px]'> </div>
              <div className='ml-10'> 
            
            <h2 className="text-3xl font-bold">{stat.value}</h2>
            <p className="text-gray-600">{stat.title}</p>
            </div>
            </div>
          </div>
          
        ))}
      </div>
      <RecentLoans/>


    </div>
  );
};

export default Dashboard;
