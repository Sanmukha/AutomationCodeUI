import React from 'react';

interface HeaderProps {
  className?: string;
  
}



export const Header: React.FC<HeaderProps> = ({ 
  className = '',
  
}) => {
  
  
  
  

  
  
  
  const handleAction = () => {
    console.log('Header action triggered');
  };

  return (
    <div className={`p-4 ${className}`}>
      
      
      
      
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">App Name</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </nav>
      </header>
      
      
    </div>
  );
};

export default Header;