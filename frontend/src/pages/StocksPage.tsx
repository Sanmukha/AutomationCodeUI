import React from 'react';
import './StocksPage.css';

export const StocksPage: React.FC = () => {
  return (
    <div className='StocksPage-container'>
      <h2>Stocks</h2>
      <section><h3>Sector Distribution</h3><div className="chart-placeholder">[pie chart]</div></section>
    <section><h3>Sector Distribution</h3><div className="chart-placeholder">[pie chart]</div></section>
    </div>
  );
};
export default StocksPage;
