import React, { useState, useMemo } from 'react';
import './StocksPage.css';

interface Row {
  stockName: string;
  sector: string;
  units: string;
  buyPrice: string;
  currentPrice: string;
  totalValue: string;
  profitLoss: string;
}

export const StocksPage: React.FC = () => {
  const initialData: Row[] = [
  {
    "stockName": "Stock Name 1",
    "sector": "Sector 1",
    "units": "Units 1",
    "buyPrice": "Buy Price 1",
    "currentPrice": "Current Price 1",
    "totalValue": "Total Value 1",
    "profitLoss": "Profit/Loss 1"
  },
  {
    "stockName": "Stock Name 2",
    "sector": "Sector 2",
    "units": "Units 2",
    "buyPrice": "Buy Price 2",
    "currentPrice": "Current Price 2",
    "totalValue": "Total Value 2",
    "profitLoss": "Profit/Loss 2"
  },
  {
    "stockName": "Stock Name 3",
    "sector": "Sector 3",
    "units": "Units 3",
    "buyPrice": "Buy Price 3",
    "currentPrice": "Current Price 3",
    "totalValue": "Total Value 3",
    "profitLoss": "Profit/Loss 3"
  },
  {
    "stockName": "Stock Name 4",
    "sector": "Sector 4",
    "units": "Units 4",
    "buyPrice": "Buy Price 4",
    "currentPrice": "Current Price 4",
    "totalValue": "Total Value 4",
    "profitLoss": "Profit/Loss 4"
  },
  {
    "stockName": "Stock Name 5",
    "sector": "Sector 5",
    "units": "Units 5",
    "buyPrice": "Buy Price 5",
    "currentPrice": "Current Price 5",
    "totalValue": "Total Value 5",
    "profitLoss": "Profit/Loss 5"
  }
];
  const [data] = useState(initialData);
  const [sort, setSort] = useState<{key: keyof Row, dir: 'asc' | 'desc'} | null>(null);
  const [q, setQ] = useState<Record<string,string>>({"sector":"","profitLossRange":"","purchaseDate":""});
  const filtered = useMemo(()=>{ const keys = Object.keys(q).filter(k=>q[k]); if(!keys.length) return data; return data.filter(r => keys.every(k => String((r as any)[k]).toLowerCase().includes(q[k].toLowerCase()))); }, [data, q]);
  const sorted = useMemo(()=>{ if(!sort) return filtered; return [...filtered].sort((a,b)=> a[sort.key].localeCompare(b[sort.key]) * (sort.dir==='asc'?1:-1)); }, [filtered, sort]);
  const doSort = (k: keyof Row) => setSort(s => !s || s.key !== k ? {key: k, dir:'asc'} : {key:k, dir: s.dir==='asc'?'desc':'asc'});
  return (
    <div className='StocksPage-container'>
      <h2>Stocks</h2>
      {/* Filters */}
      <div className="filters"><label style={{marginRight:8}}>Sector: <input value={q.sector || ''} onChange={e => setQ(v => ({...v, sector: e.target.value}))} /></label> <label style={{marginRight:8}}>Profit/Loss Range: <input value={q.profitLossRange || ''} onChange={e => setQ(v => ({...v, profitLossRange: e.target.value}))} /></label> <label style={{marginRight:8}}>Purchase Date: <input value={q.purchaseDate || ''} onChange={e => setQ(v => ({...v, purchaseDate: e.target.value}))} /></label> </div>
      {/* Table */}
      
      <table className="data-table">
        <thead><tr><th onClick={() => doSort('stockName')}>Stock Name</th><th onClick={() => doSort('sector')}>Sector</th><th onClick={() => doSort('units')}>Units</th><th onClick={() => doSort('buyPrice')}>Buy Price</th><th onClick={() => doSort('currentPrice')}>Current Price</th><th onClick={() => doSort('totalValue')}>Total Value</th><th onClick={() => doSort('profitLoss')}>Profit/Loss</th></tr></thead>
        <tbody>{sorted.map((_,i) => (<tr key={i}><td>{sorted[i].stockName}</td><td>{sorted[i].sector}</td><td>{sorted[i].units}</td><td>{sorted[i].buyPrice}</td><td>{sorted[i].currentPrice}</td><td>{sorted[i].totalValue}</td><td>{sorted[i].profitLoss}</td></tr>))}</tbody>
      </table>
      
      <section><h3>Sector Distribution</h3><div className="chart-placeholder">[pie chart]</div></section>
    </div>
  );
};
export default StocksPage;
