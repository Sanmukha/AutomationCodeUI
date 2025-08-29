import React from 'react';
import './LoansPage.css';
import { DashboardTable } from './DashboardTable';

export const LoansPage: React.FC = () => {
  return (
    <div className='LoansPage-container'>
      <h2>Build Personal Financial Portfolio Tracking Application with Dashboard & Detailed Investment Pages</h2>
      <DashboardTable />
    </div>
  );
};
export default LoansPage;