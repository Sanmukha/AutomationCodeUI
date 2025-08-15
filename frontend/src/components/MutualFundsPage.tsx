import React, { useState, useMemo } from 'react';
import './MutualFundsPage.css';

interface Row {
  filters: string;
  category: string;
  loansPage: string;
  table: string;
  filters: string;
  barChartShowingOutstandingBalancePerLoanType: string;
  goldPage: string;
  table: string;
  filters: string;
  lineChartShowingGoldValueTrend: string;
  salaryPage: string;
}

const initialData: Row[] = [
  {
    "filters": "Filters 1",
    "category": "Category 1",
    "loansPage": "*loans Page* 1",
    "table": "Table 1",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 1",
    "goldPage": "*gold Page* 1",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 1",
    "salaryPage": "*salary Page* 1"
  },
  {
    "filters": "Filters 2",
    "category": "Category 2",
    "loansPage": "*loans Page* 2",
    "table": "Table 2",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 2",
    "goldPage": "*gold Page* 2",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 2",
    "salaryPage": "*salary Page* 2"
  },
  {
    "filters": "Filters 3",
    "category": "Category 3",
    "loansPage": "*loans Page* 3",
    "table": "Table 3",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 3",
    "goldPage": "*gold Page* 3",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 3",
    "salaryPage": "*salary Page* 3"
  },
  {
    "filters": "Filters 4",
    "category": "Category 4",
    "loansPage": "*loans Page* 4",
    "table": "Table 4",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 4",
    "goldPage": "*gold Page* 4",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 4",
    "salaryPage": "*salary Page* 4"
  },
  {
    "filters": "Filters 5",
    "category": "Category 5",
    "loansPage": "*loans Page* 5",
    "table": "Table 5",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 5",
    "goldPage": "*gold Page* 5",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 5",
    "salaryPage": "*salary Page* 5"
  }
];

export const MutualFundsPage: React.FC = () => {
	const [data] = useState(initialData);
	const [sort, setSort] = useState<{key: keyof Row, dir: 'asc' | 'desc'} | null>(null);
	const [q, setQ] = useState<Record<string,string>>({"category":"","returnRange":"","fundTypeDirectRegular":""});
	const filtered = useMemo(() => {
		const keys = Object.keys(q).filter(k => q[k]);
		if (!keys.length) return data;
		return data.filter(r => keys.every(k => String((r as any)[k]).toLowerCase().includes(q[k].toLowerCase())));
	}, [data, q]);
	const sorted = useMemo(() => {
		if (!sort) return filtered;
		return [...filtered].sort((a,b) => a[sort.key].localeCompare(b[sort.key]) * (sort.dir === 'asc' ? 1 : -1));
	}, [filtered, sort]);
	const doSort = (k: keyof Row) => setSort(s => !s || s.key !== k ? {key: k, dir:'asc'} : {key:k, dir: s.dir==='asc'?'desc':'asc'});
	return (
		<div className='table-wrapper'>
			<div className='filters'><label style={{marginRight:8}}>Category: <input value={q.category || ''} onChange={e => setQ(v => ({...v, category: e.target.value}))} /></label> <label style={{marginRight:8}}>Return Range: <input value={q.returnRange || ''} onChange={e => setQ(v => ({...v, returnRange: e.target.value}))} /></label> <label style={{marginRight:8}}>Fund Type (direct/regular).: <input value={q.fundTypeDirectRegular || ''} onChange={e => setQ(v => ({...v, fundTypeDirectRegular: e.target.value}))} /></label> </div>
			<table className='data-table'>
				<thead><tr><th onClick={() => doSort('filters')}>Filters</th><th onClick={() => doSort('category')}>Category</th><th onClick={() => doSort('loansPage')}>*loans Page*</th><th onClick={() => doSort('table')}>Table</th><th onClick={() => doSort('filters')}>Filters</th><th onClick={() => doSort('barChartShowingOutstandingBalancePerLoanType')}>Bar Chart Showing Outstanding Balance Per Loan Type.</th><th onClick={() => doSort('goldPage')}>*gold Page*</th><th onClick={() => doSort('table')}>Table</th><th onClick={() => doSort('filters')}>Filters</th><th onClick={() => doSort('lineChartShowingGoldValueTrend')}>Line Chart Showing Gold Value Trend.</th><th onClick={() => doSort('salaryPage')}>*salary Page*</th></tr></thead>
				<tbody>{sorted.map((r,i) => (<tr key={i}><td>{r.filters}</td><td>{r.category}</td><td>{r.loansPage}</td><td>{r.table}</td><td>{r.filters}</td><td>{r.barChartShowingOutstandingBalancePerLoanType}</td><td>{r.goldPage}</td><td>{r.table}</td><td>{r.filters}</td><td>{r.lineChartShowingGoldValueTrend}</td><td>{r.salaryPage}</td></tr>))}</tbody>
			</table>
		</div>
	);
};
export default MutualFundsPage;