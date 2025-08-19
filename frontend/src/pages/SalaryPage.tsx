import React from 'react';
import './SalaryPage.css';

export const SalaryPage: React.FC = () => {
  return (
    <div className='SalaryPage-container'>
      <h2>Salary</h2>
      <section><h3>Income Trend</h3><div className="chart-placeholder">[line chart]</div></section>
    <section><h3>Income Trend</h3><div className="chart-placeholder">[line chart]</div></section>
    </div>
  );
};
export default SalaryPage;
