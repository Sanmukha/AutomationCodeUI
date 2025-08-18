import React from 'react';
import './DashboardPage.css';
import { DashboardTable } from './DashboardTable';

export const DashboardPage: React.FC = () => {
  return (
    <div className='DashboardPage-container'>
      <h2>Build Personal Financial Portfolio Tracking Application with Dashboard & Detailed Investment Pages</h2>
      <DashboardTable />
    </div>
  );
};
export default DashboardPage;