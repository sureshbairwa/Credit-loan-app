// src/components/LoanForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
  fullName: string;
  loanAmount: number;
  loanTenure: number;
  reason: string;
  employmentStatus: string;
  employmentAddress: string;
};



const LoanForm: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('Submitting form:', data); 

    try {
      const response = await fetch('http://localhost:5000/api/apply-loan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });

      const result = await response.json();
      console.log('Response from backend:', result);
   
    } catch (error) {
      console.error('Error sending loan application:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6 space-y-4">
    
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
        <Controller
          name="fullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              id="fullName"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
            />
          )}
        />
      </div>

     
      <div>
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Loan Amount</label>
        <Controller
          name="loanAmount"
          control={control}
          
          render={({ field }) => (
            <input
              {...field}
              id="loanAmount"
              type="number"
              placeholder="100000"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
            />
          )}
        />
      </div>

     
      <div>
        <label htmlFor="loanTenure" className="block text-sm font-medium text-gray-700">Loan Tenure (Months)</label>
        <Controller
          name="loanTenure"
          control={control}
          
          render={({ field }) => (
            <input
              {...field}
              id="loanTenure"
              type="number"
              placeholder="12"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
            />
          )}
        />
      </div>

     
      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Loan</label>
        <Controller
          name="reason"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              id="reason"
              placeholder="Reason for Loan"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
            />
          )}
        />
      </div>

     
      <div>
        <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700">Employment Status</label>
        <Controller
          name="employmentStatus"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              id="employmentStatus"
              placeholder="Employment Status"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
            />
          )}
        />
      </div>

      
      <div>
        <label htmlFor="employmentAddress" className="block text-sm font-medium text-gray-700">Employment Address</label>
        <Controller
          name="employmentAddress"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              id="employmentAddress"
              placeholder="Employment Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
            />
          )}
        />
      </div>

     
      <div className="col-span-2">
        <div className="flex items-start space-x-4">
          <input type="checkbox" id="terms" className="mt-1" />
          <label htmlFor="terms" className="text-sm">
            I have read the important information and accept that by completing
            the application I will be bound by the terms.
          </label>
        </div>
        <div className="flex items-start space-x-4 mt-2">
          <input type="checkbox" id="consent" className="mt-1" />
          <label htmlFor="consent" className="text-sm">
            Any personal and credit information obtained may be disclosed from
            time to time to other lenders, credit bureaus or other credit
            reporting agencies.
          </label>
        </div>
      </div>

     
      <div className='flex items-center justify-center'>
      <button
        type="submit"
        className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-center"
      >
        Submit
      </button>

      </div>
      
    </form>
  );
};

export default LoanForm;
