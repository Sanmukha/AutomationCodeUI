import React from 'react';
import './SalaryPage.css';
import { DashboardTable } from './DashboardTable';

export const SalaryPage: React.FC = () => {
  return (
    <div className='SalaryPage-container'>
      <h2>Build Personal Financial Portfolio Tracking Application with Dashboard & Detailed Investment Pages</h2>
      <DashboardTable />
    </div>
  );
};
export default SalaryPage;