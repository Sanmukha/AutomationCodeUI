import React, { useState, useMemo } from 'react';
import './GoldPage.css';

export const GoldPage: React.FC = () => {
  const initialData: Row[] = [
  {
    "purchaseDate": "Purchase Date 1",
    "weightGrams": "Weight (grams 1",
    "purchasePrice": "Purchase Price 1",
    "currentPrice": "Current Price 1",
    "currentValue": "Current Value 1",
    "gainLoss": "Gain/Loss 1"
  },
  {
    "purchaseDate": "Purchase Date 2",
    "weightGrams": "Weight (grams 2",
    "purchasePrice": "Purchase Price 2",
    "currentPrice": "Current Price 2",
    "currentValue": "Current Value 2",
    "gainLoss": "Gain/Loss 2"
  },
  {
    "purchaseDate": "Purchase Date 3",
    "weightGrams": "Weight (grams 3",
    "purchasePrice": "Purchase Price 3",
    "currentPrice": "Current Price 3",
    "currentValue": "Current Value 3",
    "gainLoss": "Gain/Loss 3"
  },
  {
    "purchaseDate": "Purchase Date 4",
    "weightGrams": "Weight (grams 4",
    "purchasePrice": "Purchase Price 4",
    "currentPrice": "Current Price 4",
    "currentValue": "Current Value 4",
    "gainLoss": "Gain/Loss 4"
  },
  {
    "purchaseDate": "Purchase Date 5",
    "weightGrams": "Weight (grams 5",
    "purchasePrice": "Purchase Price 5",
    "currentPrice": "Current Price 5",
    "currentValue": "Current Value 5",
    "gainLoss": "Gain/Loss 5"
  }
];
  const [data] = useState(initialData);
  const [sort, setSort] = useState<{key: keyof Row, dir: 'asc' | 'desc'} | null>(null);
  const [q, setQ] = useState<Record<string,string>>({"dateRange":"","gainLoss":""});
  const filtered = useMemo(()=>{ const keys = Object.keys(q).filter(k=>q[k]); if(!keys.length) return data; return data.filter(r => keys.every(k => String((r as any)[k]).toLowerCase().includes(q[k].toLowerCase()))); }, [data, q]);
  const sorted = useMemo(()=>{ if(!sort) return filtered; return [...filtered].sort((a,b)=> a[sort.key].localeCompare(b[sort.key]) * (sort.dir==='asc'?1:-1)); }, [filtered, sort]);
  const doSort = (k: keyof Row) => setSort(s => !s || s.key !== k ? {key: k, dir:'asc'} : {key:k, dir: s.dir==='asc'?'desc':'asc'});
  return (
    <div className='GoldPage-container'>
      <h2>Gold</h2>
      {/* Filters */}
      <div className="filters"><label style={{marginRight:8}}>Date Range: <input value={q.dateRange || ''} onChange={e => setQ(v => ({...v, dateRange: e.target.value}))} /></label> <label style={{marginRight:8}}>Gain/Loss: <input value={q.gainLoss || ''} onChange={e => setQ(v => ({...v, gainLoss: e.target.value}))} /></label> </div>
      {/* Table */}
      
      interface Row {
  purchaseDate: string;\n  weightGrams: string;\n  purchasePrice: string;\n  currentPrice: string;\n  currentValue: string;\n  gainLoss: string;
      }
      <table className="data-table">
        <thead><tr><th onClick={() => doSort('purchaseDate')}>Purchase Date</th><th onClick={() => doSort('weightGrams')}>Weight (grams</th><th onClick={() => doSort('purchasePrice')}>Purchase Price</th><th onClick={() => doSort('currentPrice')}>Current Price</th><th onClick={() => doSort('currentValue')}>Current Value</th><th onClick={() => doSort('gainLoss')}>Gain/Loss</th></tr></thead>
        <tbody>{sorted.map((_,i) => (<tr key={i}><td>{sorted[i].purchaseDate}</td><td>{sorted[i].weightGrams}</td><td>{sorted[i].purchasePrice}</td><td>{sorted[i].currentPrice}</td><td>{sorted[i].currentValue}</td><td>{sorted[i].gainLoss}</td></tr>))}</tbody>
      </table>
      
      <section><h3>Gold Value Trend</h3><div className="chart-placeholder">[line chart]</div></section>
    </div>
  );
};
export default GoldPage;
