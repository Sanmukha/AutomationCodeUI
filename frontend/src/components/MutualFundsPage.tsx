import React from 'react';
import './MutualFundsPage.css';
import { DashboardTable } from './DashboardTable';

export const MutualFundsPage: React.FC = () => {
  return (
    <div className='MutualFundsPage-container'>
      <h2>Build Personal Financial Portfolio Tracking Application with Dashboard & Detailed Investment Pages</h2>
      <DashboardTable />
    </div>
  );
};
export default MutualFundsPage;