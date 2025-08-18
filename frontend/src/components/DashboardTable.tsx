import React, { useState, useMemo } from 'react';
import './DashboardTable.css';

interface Row {
  filtersSectorProfitLossRangeDatePurchased: string;
  graphSectorDistributionPieChart: string;
  mutualFundsPage: string;
  graphCategory: string;
  wisePieChart: string;
  lo: string;
}

const initialData: Row[] = [
  {
    "filtersSectorProfitLossRangeDatePurchased": "#* filters: sector, profit/loss range, date purchased 1",
    "graphSectorDistributionPieChart": "#* graph: sector distribution (pie chart) 1",
    "mutualFundsPage": "# *mutual funds page* 1",
    "graphCategory": "#* graph: category 1",
    "wisePieChart": "wise pie chart 1",
    "lo": "# *lo 1"
  },
  {
    "filtersSectorProfitLossRangeDatePurchased": "#* filters: sector, profit/loss range, date purchased 2",
    "graphSectorDistributionPieChart": "#* graph: sector distribution (pie chart) 2",
    "mutualFundsPage": "# *mutual funds page* 2",
    "graphCategory": "#* graph: category 2",
    "wisePieChart": "wise pie chart 2",
    "lo": "# *lo 2"
  },
  {
    "filtersSectorProfitLossRangeDatePurchased": "#* filters: sector, profit/loss range, date purchased 3",
    "graphSectorDistributionPieChart": "#* graph: sector distribution (pie chart) 3",
    "mutualFundsPage": "# *mutual funds page* 3",
    "graphCategory": "#* graph: category 3",
    "wisePieChart": "wise pie chart 3",
    "lo": "# *lo 3"
  },
  {
    "filtersSectorProfitLossRangeDatePurchased": "#* filters: sector, profit/loss range, date purchased 4",
    "graphSectorDistributionPieChart": "#* graph: sector distribution (pie chart) 4",
    "mutualFundsPage": "# *mutual funds page* 4",
    "graphCategory": "#* graph: category 4",
    "wisePieChart": "wise pie chart 4",
    "lo": "# *lo 4"
  },
  {
    "filtersSectorProfitLossRangeDatePurchased": "#* filters: sector, profit/loss range, date purchased 5",
    "graphSectorDistributionPieChart": "#* graph: sector distribution (pie chart) 5",
    "mutualFundsPage": "# *mutual funds page* 5",
    "graphCategory": "#* graph: category 5",
    "wisePieChart": "wise pie chart 5",
    "lo": "# *lo 5"
  }
];

export const DashboardTable: React.FC = () => {
  const [data] = useState(initialData);
  const [sort, setSort] = useState<{key: keyof Row, dir: 'asc' | 'desc'} | null>(null);
  const sorted = useMemo(() => {
    if (!sort) return data;
    return [...data].sort((a,b) => a[sort.key].localeCompare(b[sort.key]) * (sort.dir === 'asc' ? 1 : -1));
  }, [data, sort]);
  const doSort = (k: keyof Row) => setSort(s => !s || s.key !== k ? {key: k, dir:'asc'} : {key:k, dir: s.dir==='asc'?'desc':'asc'});
  return (
    <div className='table-wrapper'>
      <table className='data-table'>
        <thead><tr><th onClick={() => doSort('filtersSectorProfitLossRangeDatePurchased')}>#* filters: sector, profit/loss range, date purchased</th><th onClick={() => doSort('graphSectorDistributionPieChart')}>#* graph: sector distribution (pie chart)</th><th onClick={() => doSort('mutualFundsPage')}># *mutual funds page*</th><th onClick={() => doSort('graphCategory')}>#* graph: category</th><th onClick={() => doSort('wisePieChart')}>wise pie chart</th><th onClick={() => doSort('lo')}># *lo</th></tr></thead>
        <tbody>{sorted.map((r,i) => (<tr key={i}><td>{r.filtersSectorProfitLossRangeDatePurchased}</td><td>{r.graphSectorDistributionPieChart}</td><td>{r.mutualFundsPage}</td><td>{r.graphCategory}</td><td>{r.wisePieChart}</td><td>{r.lo}</td></tr>))}</tbody>
      </table>
    </div>
  );
};
export default DashboardTable;