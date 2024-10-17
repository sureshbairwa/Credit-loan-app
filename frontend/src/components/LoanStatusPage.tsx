// src/components/LoanStatusPage.tsx
import React, { useState } from 'react';
import LoanForm from './LoanForm';
import LoansComponent from './LoanComponent';



const LoanStatusPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);



  return (
    <div className="p-6">
      <div className="flex justify-center items-center mb-6">
        
        <button
          onClick={openModal}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Get A Loan
        </button>
      </div>

      <LoansComponent/>

     
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Apply for a Loan</h2>
            <LoanForm />
            <button
              onClick={closeModal}
              className="mt-4 w-1/2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanStatusPage;
