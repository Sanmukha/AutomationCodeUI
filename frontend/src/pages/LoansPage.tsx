import React, { useState, useMemo } from 'react';
import './LoansPage.css';

export const LoansPage: React.FC = () => {
  const initialData: Row[] = [
  {
    "loanType": "Loan Type 1",
    "amount": "Amount 1",
    "interestRate": "Interest Rate 1",
    "startDate": "Start Date 1",
    "endDate": "End Date 1",
    "emi": "EMI 1",
    "outstandingBalance": "Outstanding Balance 1"
  },
  {
    "loanType": "Loan Type 2",
    "amount": "Amount 2",
    "interestRate": "Interest Rate 2",
    "startDate": "Start Date 2",
    "endDate": "End Date 2",
    "emi": "EMI 2",
    "outstandingBalance": "Outstanding Balance 2"
  },
  {
    "loanType": "Loan Type 3",
    "amount": "Amount 3",
    "interestRate": "Interest Rate 3",
    "startDate": "Start Date 3",
    "endDate": "End Date 3",
    "emi": "EMI 3",
    "outstandingBalance": "Outstanding Balance 3"
  },
  {
    "loanType": "Loan Type 4",
    "amount": "Amount 4",
    "interestRate": "Interest Rate 4",
    "startDate": "Start Date 4",
    "endDate": "End Date 4",
    "emi": "EMI 4",
    "outstandingBalance": "Outstanding Balance 4"
  },
  {
    "loanType": "Loan Type 5",
    "amount": "Amount 5",
    "interestRate": "Interest Rate 5",
    "startDate": "Start Date 5",
    "endDate": "End Date 5",
    "emi": "EMI 5",
    "outstandingBalance": "Outstanding Balance 5"
  }
];
  const [data] = useState(initialData);
  const [sort, setSort] = useState<{key: keyof Row, dir: 'asc' | 'desc'} | null>(null);
  const [q, setQ] = useState<Record<string,string>>({"loanType":"","remainingTenure":""});
  const filtered = useMemo(()=>{ const keys = Object.keys(q).filter(k=>q[k]); if(!keys.length) return data; return data.filter(r => keys.every(k => String((r as any)[k]).toLowerCase().includes(q[k].toLowerCase()))); }, [data, q]);
  const sorted = useMemo(()=>{ if(!sort) return filtered; return [...filtered].sort((a,b)=> a[sort.key].localeCompare(b[sort.key]) * (sort.dir==='asc'?1:-1)); }, [filtered, sort]);
  const doSort = (k: keyof Row) => setSort(s => !s || s.key !== k ? {key: k, dir:'asc'} : {key:k, dir: s.dir==='asc'?'desc':'asc'});
  return (
    <div className='LoansPage-container'>
      <h2>Loans</h2>
      {/* Filters */}
      <div className="filters"><label style={{marginRight:8}}>Loan Type: <input value={q.loanType || ''} onChange={e => setQ(v => ({...v, loanType: e.target.value}))} /></label> <label style={{marginRight:8}}>Remaining Tenure: <input value={q.remainingTenure || ''} onChange={e => setQ(v => ({...v, remainingTenure: e.target.value}))} /></label> </div>
      {/* Table */}
      
      interface Row {
  loanType: string;\n  amount: string;\n  interestRate: string;\n  startDate: string;\n  endDate: string;\n  emi: string;\n  outstandingBalance: string;
      }
      <table className="data-table">
        <thead><tr><th onClick={() => doSort('loanType')}>Loan Type</th><th onClick={() => doSort('amount')}>Amount</th><th onClick={() => doSort('interestRate')}>Interest Rate</th><th onClick={() => doSort('startDate')}>Start Date</th><th onClick={() => doSort('endDate')}>End Date</th><th onClick={() => doSort('emi')}>EMI</th><th onClick={() => doSort('outstandingBalance')}>Outstanding Balance</th></tr></thead>
        <tbody>{sorted.map((_,i) => (<tr key={i}><td>{sorted[i].loanType}</td><td>{sorted[i].amount}</td><td>{sorted[i].interestRate}</td><td>{sorted[i].startDate}</td><td>{sorted[i].endDate}</td><td>{sorted[i].emi}</td><td>{sorted[i].outstandingBalance}</td></tr>))}</tbody>
      </table>
      
      <section><h3>Outstanding Balance per Loan Type</h3><div className="chart-placeholder">[bar chart]</div></section>
    </div>
  );
};
export default LoansPage;
