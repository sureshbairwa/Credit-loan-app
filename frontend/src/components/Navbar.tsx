import React, { useState } from 'react';

interface NavbarProps {
  setRole: React.Dispatch<React.SetStateAction<'user' | 'admin'>>;
}

const Navbar: React.FC<NavbarProps> = ({ setRole }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [currentRole, setCurrentRole] = useState<'user' | 'admin'>('user'); 

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); 
  };

  const handleRoleChange = (role: 'user' | 'admin') => {
    setCurrentRole(role); 
    setRole(role);
    setIsDropdownOpen(false); 
  };

  return (
    <nav className="bg-green-600 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold">CREDIT APP</span>
      </div>
      <div className="space-x-16">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/" className="hover:text-gray-300">Payments</a>
        <a href="/" className="hover:text-gray-300">Budget</a>
        <a href="/" className="hover:text-gray-300">Card</a>
      </div>

      <div className="flex items-center space-x-4 relative">
        
        
       
        <button
          onClick={toggleDropdown}
          className="bg-gray-100 text-green-600 rounded-full p-2 flex items-center"
        >
          {currentRole} <span className="ml-1">▼</span> 
        </button>

       
        {isDropdownOpen && (
          <div className="text-black absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <button
              onClick={() => handleRoleChange('user')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              User
            </button>
            <button
              onClick={() => handleRoleChange('admin')}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Admin
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
