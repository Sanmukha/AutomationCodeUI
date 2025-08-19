import React, { useState, useMemo } from 'react';
import './MutualFundsPage.css';

export const MutualFundsPage: React.FC = () => {
  const initialData: Row[] = [
  {
    "fundName": "Fund Name 1",
    "category": "Category 1",
    "units": "Units 1",
    "nav": "NAV 1",
    "investedAmount": "Invested Amount 1",
    "currentValue": "Current Value 1",
    "returns": "Returns (% 1"
  },
  {
    "fundName": "Fund Name 2",
    "category": "Category 2",
    "units": "Units 2",
    "nav": "NAV 2",
    "investedAmount": "Invested Amount 2",
    "currentValue": "Current Value 2",
    "returns": "Returns (% 2"
  },
  {
    "fundName": "Fund Name 3",
    "category": "Category 3",
    "units": "Units 3",
    "nav": "NAV 3",
    "investedAmount": "Invested Amount 3",
    "currentValue": "Current Value 3",
    "returns": "Returns (% 3"
  },
  {
    "fundName": "Fund Name 4",
    "category": "Category 4",
    "units": "Units 4",
    "nav": "NAV 4",
    "investedAmount": "Invested Amount 4",
    "currentValue": "Current Value 4",
    "returns": "Returns (% 4"
  },
  {
    "fundName": "Fund Name 5",
    "category": "Category 5",
    "units": "Units 5",
    "nav": "NAV 5",
    "investedAmount": "Invested Amount 5",
    "currentValue": "Current Value 5",
    "returns": "Returns (% 5"
  }
];
  const [data] = useState(initialData);
  const [sort, setSort] = useState<{key: keyof Row, dir: 'asc' | 'desc'} | null>(null);
  const [q, setQ] = useState<Record<string,string>>({"category":"","returnRange":"","fundType":""});
  const filtered = useMemo(()=>{ const keys = Object.keys(q).filter(k=>q[k]); if(!keys.length) return data; return data.filter(r => keys.every(k => String((r as any)[k]).toLowerCase().includes(q[k].toLowerCase()))); }, [data, q]);
  const sorted = useMemo(()=>{ if(!sort) return filtered; return [...filtered].sort((a,b)=> a[sort.key].localeCompare(b[sort.key]) * (sort.dir==='asc'?1:-1)); }, [filtered, sort]);
  const doSort = (k: keyof Row) => setSort(s => !s || s.key !== k ? {key: k, dir:'asc'} : {key:k, dir: s.dir==='asc'?'desc':'asc'});
  return (
    <div className='MutualFundsPage-container'>
      <h2>Mutual Funds</h2>
      {/* Filters */}
      <div className="filters"><label style={{marginRight:8}}>Category: <input value={q.category || ''} onChange={e => setQ(v => ({...v, category: e.target.value}))} /></label> <label style={{marginRight:8}}>Return Range: <input value={q.returnRange || ''} onChange={e => setQ(v => ({...v, returnRange: e.target.value}))} /></label> <label style={{marginRight:8}}>Fund Type: <input value={q.fundType || ''} onChange={e => setQ(v => ({...v, fundType: e.target.value}))} /></label> </div>
      {/* Table */}
      
      interface Row {
  fundName: string;\n  category: string;\n  units: string;\n  nav: string;\n  investedAmount: string;\n  currentValue: string;\n  returns: string;
      }
      <table className="data-table">
        <thead><tr><th onClick={() => doSort('fundName')}>Fund Name</th><th onClick={() => doSort('category')}>Category</th><th onClick={() => doSort('units')}>Units</th><th onClick={() => doSort('nav')}>NAV</th><th onClick={() => doSort('investedAmount')}>Invested Amount</th><th onClick={() => doSort('currentValue')}>Current Value</th><th onClick={() => doSort('returns')}>Returns (%</th></tr></thead>
        <tbody>{sorted.map((_,i) => (<tr key={i}><td>{sorted[i].fundName}</td><td>{sorted[i].category}</td><td>{sorted[i].units}</td><td>{sorted[i].nav}</td><td>{sorted[i].investedAmount}</td><td>{sorted[i].currentValue}</td><td>{sorted[i].returns}</td></tr>))}</tbody>
      </table>
      
      <section><h3>Category Distribution</h3><div className="chart-placeholder">[donut chart]</div></section>
    </div>
  );
};
export default MutualFundsPage;
