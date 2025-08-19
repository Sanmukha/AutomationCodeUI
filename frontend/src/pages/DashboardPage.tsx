import React from 'react';
import './DashboardPage.css';

export const DashboardPage: React.FC = () => {
  return (
    <div className='DashboardPage-container'>
      <h2>Dashboard</h2>
      <section><h3>Stocks by Sector</h3><div className="chart-placeholder">[pie chart]</div></section>
      <section><h3>Mutual Funds by Category</h3><div className="chart-placeholder">[donut chart]</div></section>
      <section><h3>Loans by Type</h3><div className="chart-placeholder">[bar chart]</div></section>
      <section><h3>Gold Value Over Time</h3><div className="chart-placeholder">[line chart]</div></section>
      <section><h3>Salary Trend</h3><div className="chart-placeholder">[line chart]</div></section>
    <section><h3>Stocks by Sector</h3><div className="chart-placeholder">[pie chart]</div></section>
      <section><h3>Mutual Funds by Category</h3><div className="chart-placeholder">[donut chart]</div></section>
      <section><h3>Loans by Type</h3><div className="chart-placeholder">[bar chart]</div></section>
      <section><h3>Gold Value Over Time</h3><div className="chart-placeholder">[line chart]</div></section>
      <section><h3>Salary Trend</h3><div className="chart-placeholder">[line chart]</div></section>
    </div>
  );
};
export default DashboardPage;
