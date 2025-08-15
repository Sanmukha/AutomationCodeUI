import React, { useState, useMemo } from 'react';
import './LoansPage.css';

interface Row {
  filters: string;
  barChartShowingOutstandingBalancePerLoanType: string;
  goldPage: string;
  table: string;
  filters: string;
  lineChartShowingGoldValueTrend: string;
  salaryPage: string;
  table: string;
  filters: string;
  lineChartShowingIncomeTrend: string;
  technologyImplementationNotes: string;
}

const initialData: Row[] = [
  {
    "filters": "Filters 1",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 1",
    "goldPage": "*gold Page* 1",
    "table": "Table 1",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 1",
    "salaryPage": "*salary Page* 1",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 1",
    "technologyImplementationNotes": "*technology & Implementation Notes* 1"
  },
  {
    "filters": "Filters 2",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 2",
    "goldPage": "*gold Page* 2",
    "table": "Table 2",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 2",
    "salaryPage": "*salary Page* 2",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 2",
    "technologyImplementationNotes": "*technology & Implementation Notes* 2"
  },
  {
    "filters": "Filters 3",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 3",
    "goldPage": "*gold Page* 3",
    "table": "Table 3",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 3",
    "salaryPage": "*salary Page* 3",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 3",
    "technologyImplementationNotes": "*technology & Implementation Notes* 3"
  },
  {
    "filters": "Filters 4",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 4",
    "goldPage": "*gold Page* 4",
    "table": "Table 4",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 4",
    "salaryPage": "*salary Page* 4",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 4",
    "technologyImplementationNotes": "*technology & Implementation Notes* 4"
  },
  {
    "filters": "Filters 5",
    "barChartShowingOutstandingBalancePerLoanType": "Bar Chart Showing Outstanding Balance Per Loan Type. 5",
    "goldPage": "*gold Page* 5",
    "table": "Table 5",
    "lineChartShowingGoldValueTrend": "Line Chart Showing Gold Value Trend. 5",
    "salaryPage": "*salary Page* 5",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 5",
    "technologyImplementationNotes": "*technology & Implementation Notes* 5"
  }
];

export const LoansPage: React.FC = () => {
	const [data] = useState(initialData);
	const [sort, setSort] = useState<{key: keyof Row, dir: 'asc' | 'desc'} | null>(null);
	const [q, setQ] = useState<Record<string,string>>({"loanType":"","remainingTenure":""});
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
			<div className='filters'><label style={{marginRight:8}}>Loan Type: <input value={q.loanType || ''} onChange={e => setQ(v => ({...v, loanType: e.target.value}))} /></label> <label style={{marginRight:8}}>Remaining Tenure.: <input value={q.remainingTenure || ''} onChange={e => setQ(v => ({...v, remainingTenure: e.target.value}))} /></label> </div>
			<table className='data-table'>
				<thead><tr><th onClick={() => doSort('filters')}>Filters</th><th onClick={() => doSort('barChartShowingOutstandingBalancePerLoanType')}>Bar Chart Showing Outstanding Balance Per Loan Type.</th><th onClick={() => doSort('goldPage')}>*gold Page*</th><th onClick={() => doSort('table')}>Table</th><th onClick={() => doSort('filters')}>Filters</th><th onClick={() => doSort('lineChartShowingGoldValueTrend')}>Line Chart Showing Gold Value Trend.</th><th onClick={() => doSort('salaryPage')}>*salary Page*</th><th onClick={() => doSort('table')}>Table</th><th onClick={() => doSort('filters')}>Filters</th><th onClick={() => doSort('lineChartShowingIncomeTrend')}>Line Chart Showing Income Trend.</th><th onClick={() => doSort('technologyImplementationNotes')}>*technology & Implementation Notes*</th></tr></thead>
				<tbody>{sorted.map((r,i) => (<tr key={i}><td>{r.filters}</td><td>{r.barChartShowingOutstandingBalancePerLoanType}</td><td>{r.goldPage}</td><td>{r.table}</td><td>{r.filters}</td><td>{r.lineChartShowingGoldValueTrend}</td><td>{r.salaryPage}</td><td>{r.table}</td><td>{r.filters}</td><td>{r.lineChartShowingIncomeTrend}</td><td>{r.technologyImplementationNotes}</td></tr>))}</tbody>
			</table>
		</div>
	);
};
export default LoansPage;