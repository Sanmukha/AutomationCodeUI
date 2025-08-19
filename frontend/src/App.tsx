import React from 'react';

export default function App(){
  return (
    <div style={{display:'flex'}}>
      <aside style={{width:220, borderRight:'1px solid #ddd', padding:12}}>
        <h3>PersonalFinanceTracker</h3>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Stocks</a></li>
            <li><a href="#">Mutual Funds</a></li>
            <li><a href="#">Loans</a></li>
            <li><a href="#">Gold</a></li>
            <li><a href="#">Salary</a></li>
          </ul>
        </nav>
      </aside>
      <main style={{padding:16}}>
        <h1>Welcome</h1>
      </main>
    </div>
  );
}
