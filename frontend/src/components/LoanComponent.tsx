import React, { useEffect, useState } from 'react';
import axios from 'axios';


type Loan = {
  fullName: string;
  loanAmount: number;
  appliedAt: Date; 
};

const LoansComponent: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]); 

  useEffect(() => {
    axios.get<Loan[]>('http://localhost:5000/api/loans') 
      .then(response => {
        setLoans(response.data);  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);  

  return (
    <div>
      <h1 className='text-2xl font-bold mb-3'>Applied Loans</h1>
     

      
<table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="text-left bg-gray-100 border-b border-gray-200">
            <th className="p-4">Loan Officer</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Date</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-4">John Okoh</td>
              <td className="p-4">₦{loan.loanAmount}</td>
              <td className="p-4"> <p>{new Date(loan.appliedAt).toLocaleDateString()}</p> </td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  Pending
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default LoansComponent;
