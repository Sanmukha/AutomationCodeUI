import React, { useState, useMemo } from 'react';
import './SalaryPage.css';

export const SalaryPage: React.FC = () => {
  const initialData: Row[] = [
  {
    "month": "Month 1",
    "grossSalary": "Gross Salary 1",
    "deductions": "Deductions 1",
    "netSalary": "Net Salary 1"
  },
  {
    "month": "Month 2",
    "grossSalary": "Gross Salary 2",
    "deductions": "Deductions 2",
    "netSalary": "Net Salary 2"
  },
  {
    "month": "Month 3",
    "grossSalary": "Gross Salary 3",
    "deductions": "Deductions 3",
    "netSalary": "Net Salary 3"
  },
  {
    "month": "Month 4",
    "grossSalary": "Gross Salary 4",
    "deductions": "Deductions 4",
    "netSalary": "Net Salary 4"
  },
  {
    "month": "Month 5",
    "grossSalary": "Gross Salary 5",
    "deductions": "Deductions 5",
    "netSalary": "Net Salary 5"
  }
];
  const [data] = useState(initialData);
  const [sort, setSort] = useState<{key: keyof Row, dir: 'asc' | 'desc'} | null>(null);
  const [q, setQ] = useState<Record<string,string>>({"year":""});
  const filtered = useMemo(()=>{ const keys = Object.keys(q).filter(k=>q[k]); if(!keys.length) return data; return data.filter(r => keys.every(k => String((r as any)[k]).toLowerCase().includes(q[k].toLowerCase()))); }, [data, q]);
  const sorted = useMemo(()=>{ if(!sort) return filtered; return [...filtered].sort((a,b)=> a[sort.key].localeCompare(b[sort.key]) * (sort.dir==='asc'?1:-1)); }, [filtered, sort]);
  const doSort = (k: keyof Row) => setSort(s => !s || s.key !== k ? {key: k, dir:'asc'} : {key:k, dir: s.dir==='asc'?'desc':'asc'});
  return (
    <div className='SalaryPage-container'>
      <h2>Salary</h2>
      {/* Filters */}
      <div className="filters"><label style={{marginRight:8}}>Year: <input value={q.year || ''} onChange={e => setQ(v => ({...v, year: e.target.value}))} /></label> </div>
      {/* Table */}
      
      interface Row {
  month: string;\n  grossSalary: string;\n  deductions: string;\n  netSalary: string;
      }
      <table className="data-table">
        <thead><tr><th onClick={() => doSort('month')}>Month</th><th onClick={() => doSort('grossSalary')}>Gross Salary</th><th onClick={() => doSort('deductions')}>Deductions</th><th onClick={() => doSort('netSalary')}>Net Salary</th></tr></thead>
        <tbody>{sorted.map((_,i) => (<tr key={i}><td>{sorted[i].month}</td><td>{sorted[i].grossSalary}</td><td>{sorted[i].deductions}</td><td>{sorted[i].netSalary}</td></tr>))}</tbody>
      </table>
      
      <section><h3>Income Trend</h3><div className="chart-placeholder">[line chart]</div></section>
    </div>
  );
};
export default SalaryPage;
