import React from 'react';
import './GoldPage.css';
import { DashboardTable } from './DashboardTable';

export const GoldPage: React.FC = () => {
  return (
    <div className='GoldPage-container'>
      <h2>Build Personal Financial Portfolio Tracking Application with Dashboard & Detailed Investment Pages</h2>
      <DashboardTable />
    </div>
  );
};
export default GoldPage;