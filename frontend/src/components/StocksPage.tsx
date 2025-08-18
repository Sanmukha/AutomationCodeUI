import React from 'react';
import './StocksPage.css';
import { DashboardTable } from './DashboardTable';

export const StocksPage: React.FC = () => {
  return (
    <div className='StocksPage-container'>
      <h2>Build Personal Financial Portfolio Tracking Application with Dashboard & Detailed Investment Pages</h2>
      <DashboardTable />
    </div>
  );
};
export default StocksPage;