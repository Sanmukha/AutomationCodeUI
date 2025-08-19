import React from 'react';
import './LoansPage.css';

export const LoansPage: React.FC = () => {
  return (
    <div className='LoansPage-container'>
      <h2>Loans</h2>
      <section><h3>Outstanding Balance per Loan Type</h3><div className="chart-placeholder">[bar chart]</div></section>
    <section><h3>Outstanding Balance per Loan Type</h3><div className="chart-placeholder">[bar chart]</div></section>
    </div>
  );
};
export default LoansPage;
