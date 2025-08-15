import React, { useState, useMemo } from 'react';
import './SalaryPage.css';

interface Row {
  filters: string;
  lineChartShowingIncomeTrend: string;
  technologyImplementationNotes: string;
  ensureResponsiveDesignForDesktopTabletAndMobile: string;
  useChartingLibraryEGChartJsRechartsForGraphs: string;
  dataToBeFetchedFromApiMockDataInInitialVersion: string;
  definitionOfDoneDod: string;
  allPagesAndDashboardImplementedWithMockData: string;
  graphsAndTablesFunctionalWithSortingFilteringAndPaginationWhereApplicable: string;
}

const initialData: Row[] = [
  {
    "filters": "Filters 1",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 1",
    "technologyImplementationNotes": "*technology & Implementation Notes* 1",
    "ensureResponsiveDesignForDesktopTabletAndMobile": "Ensure Responsive Design For Desktop, Tablet, And Mobile. 1",
    "useChartingLibraryEGChartJsRechartsForGraphs": "Use Charting Library (e.g., Chart.js, Recharts) For Graphs. 1",
    "dataToBeFetchedFromApiMockDataInInitialVersion": "Data To Be Fetched From Api (mock Data In Initial Version). 1",
    "definitionOfDoneDod": "Definition Of Done (dod) 1",
    "allPagesAndDashboardImplementedWithMockData": "All Pages And Dashboard Implemented With Mock Data. 1",
    "graphsAndTablesFunctionalWithSortingFilteringAndPaginationWhereApplicable": "Graphs And Tables Functional With Sorting, Filtering, And Pagination Where Applicable. 1"
  },
  {
    "filters": "Filters 2",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 2",
    "technologyImplementationNotes": "*technology & Implementation Notes* 2",
    "ensureResponsiveDesignForDesktopTabletAndMobile": "Ensure Responsive Design For Desktop, Tablet, And Mobile. 2",
    "useChartingLibraryEGChartJsRechartsForGraphs": "Use Charting Library (e.g., Chart.js, Recharts) For Graphs. 2",
    "dataToBeFetchedFromApiMockDataInInitialVersion": "Data To Be Fetched From Api (mock Data In Initial Version). 2",
    "definitionOfDoneDod": "Definition Of Done (dod) 2",
    "allPagesAndDashboardImplementedWithMockData": "All Pages And Dashboard Implemented With Mock Data. 2",
    "graphsAndTablesFunctionalWithSortingFilteringAndPaginationWhereApplicable": "Graphs And Tables Functional With Sorting, Filtering, And Pagination Where Applicable. 2"
  },
  {
    "filters": "Filters 3",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 3",
    "technologyImplementationNotes": "*technology & Implementation Notes* 3",
    "ensureResponsiveDesignForDesktopTabletAndMobile": "Ensure Responsive Design For Desktop, Tablet, And Mobile. 3",
    "useChartingLibraryEGChartJsRechartsForGraphs": "Use Charting Library (e.g., Chart.js, Recharts) For Graphs. 3",
    "dataToBeFetchedFromApiMockDataInInitialVersion": "Data To Be Fetched From Api (mock Data In Initial Version). 3",
    "definitionOfDoneDod": "Definition Of Done (dod) 3",
    "allPagesAndDashboardImplementedWithMockData": "All Pages And Dashboard Implemented With Mock Data. 3",
    "graphsAndTablesFunctionalWithSortingFilteringAndPaginationWhereApplicable": "Graphs And Tables Functional With Sorting, Filtering, And Pagination Where Applicable. 3"
  },
  {
    "filters": "Filters 4",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 4",
    "technologyImplementationNotes": "*technology & Implementation Notes* 4",
    "ensureResponsiveDesignForDesktopTabletAndMobile": "Ensure Responsive Design For Desktop, Tablet, And Mobile. 4",
    "useChartingLibraryEGChartJsRechartsForGraphs": "Use Charting Library (e.g., Chart.js, Recharts) For Graphs. 4",
    "dataToBeFetchedFromApiMockDataInInitialVersion": "Data To Be Fetched From Api (mock Data In Initial Version). 4",
    "definitionOfDoneDod": "Definition Of Done (dod) 4",
    "allPagesAndDashboardImplementedWithMockData": "All Pages And Dashboard Implemented With Mock Data. 4",
    "graphsAndTablesFunctionalWithSortingFilteringAndPaginationWhereApplicable": "Graphs And Tables Functional With Sorting, Filtering, And Pagination Where Applicable. 4"
  },
  {
    "filters": "Filters 5",
    "lineChartShowingIncomeTrend": "Line Chart Showing Income Trend. 5",
    "technologyImplementationNotes": "*technology & Implementation Notes* 5",
    "ensureResponsiveDesignForDesktopTabletAndMobile": "Ensure Responsive Design For Desktop, Tablet, And Mobile. 5",
    "useChartingLibraryEGChartJsRechartsForGraphs": "Use Charting Library (e.g., Chart.js, Recharts) For Graphs. 5",
    "dataToBeFetchedFromApiMockDataInInitialVersion": "Data To Be Fetched From Api (mock Data In Initial Version). 5",
    "definitionOfDoneDod": "Definition Of Done (dod) 5",
    "allPagesAndDashboardImplementedWithMockData": "All Pages And Dashboard Implemented With Mock Data. 5",
    "graphsAndTablesFunctionalWithSortingFilteringAndPaginationWhereApplicable": "Graphs And Tables Functional With Sorting, Filtering, And Pagination Where Applicable. 5"
  }
];

export const SalaryPage: React.FC = () => {
	const [data] = useState(initialData);
	const [sort, setSort] = useState<{key: keyof Row, dir: 'asc' | 'desc'} | null>(null);
	const [q, setQ] = useState<Record<string,string>>({"yearSelection":""});
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
			<div className='filters'><label style={{marginRight:8}}>Year Selection.: <input value={q.yearSelection || ''} onChange={e => setQ(v => ({...v, yearSelection: e.target.value}))} /></label> </div>
			<table className='data-table'>
				<thead><tr><th onClick={() => doSort('filters')}>Filters</th><th onClick={() => doSort('lineChartShowingIncomeTrend')}>Line Chart Showing Income Trend.</th><th onClick={() => doSort('technologyImplementationNotes')}>*technology & Implementation Notes*</th><th onClick={() => doSort('ensureResponsiveDesignForDesktopTabletAndMobile')}>Ensure Responsive Design For Desktop, Tablet, And Mobile.</th><th onClick={() => doSort('useChartingLibraryEGChartJsRechartsForGraphs')}>Use Charting Library (e.g., Chart.js, Recharts) For Graphs.</th><th onClick={() => doSort('dataToBeFetchedFromApiMockDataInInitialVersion')}>Data To Be Fetched From Api (mock Data In Initial Version).</th><th onClick={() => doSort('definitionOfDoneDod')}>Definition Of Done (dod)</th><th onClick={() => doSort('allPagesAndDashboardImplementedWithMockData')}>All Pages And Dashboard Implemented With Mock Data.</th><th onClick={() => doSort('graphsAndTablesFunctionalWithSortingFilteringAndPaginationWhereApplicable')}>Graphs And Tables Functional With Sorting, Filtering, And Pagination Where Applicable.</th></tr></thead>
				<tbody>{sorted.map((r,i) => (<tr key={i}><td>{r.filters}</td><td>{r.lineChartShowingIncomeTrend}</td><td>{r.technologyImplementationNotes}</td><td>{r.ensureResponsiveDesignForDesktopTabletAndMobile}</td><td>{r.useChartingLibraryEGChartJsRechartsForGraphs}</td><td>{r.dataToBeFetchedFromApiMockDataInInitialVersion}</td><td>{r.definitionOfDoneDod}</td><td>{r.allPagesAndDashboardImplementedWithMockData}</td><td>{r.graphsAndTablesFunctionalWithSortingFilteringAndPaginationWhereApplicable}</td></tr>))}</tbody>
			</table>
		</div>
	);
};
export default SalaryPage;