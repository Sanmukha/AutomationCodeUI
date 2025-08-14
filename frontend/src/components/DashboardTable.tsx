import React, { useState, useMemo } from 'react';
import './DashboardTable.css';

interface Row {
  graphShowingSectorDistribution: string;
  mutualFundsPage: string;
  category: string;
  wisePieChart: string;
  lo: string;
}

const initialData: Row[] = [
  {
    "graphShowingSectorDistribution": "#* graph showing sector distribution 1",
    "mutualFundsPage": "# *mutual funds page* 1",
    "category": "#* category 1",
    "wisePieChart": "wise pie chart 1",
    "lo": "# *lo 1"
  },
  {
    "graphShowingSectorDistribution": "#* graph showing sector distribution 2",
    "mutualFundsPage": "# *mutual funds page* 2",
    "category": "#* category 2",
    "wisePieChart": "wise pie chart 2",
    "lo": "# *lo 2"
  },
  {
    "graphShowingSectorDistribution": "#* graph showing sector distribution 3",
    "mutualFundsPage": "# *mutual funds page* 3",
    "category": "#* category 3",
    "wisePieChart": "wise pie chart 3",
    "lo": "# *lo 3"
  },
  {
    "graphShowingSectorDistribution": "#* graph showing sector distribution 4",
    "mutualFundsPage": "# *mutual funds page* 4",
    "category": "#* category 4",
    "wisePieChart": "wise pie chart 4",
    "lo": "# *lo 4"
  },
  {
    "graphShowingSectorDistribution": "#* graph showing sector distribution 5",
    "mutualFundsPage": "# *mutual funds page* 5",
    "category": "#* category 5",
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
        <thead><tr><th onClick={() => doSort('graphShowingSectorDistribution')}>#* graph showing sector distribution</th><th onClick={() => doSort('mutualFundsPage')}># *mutual funds page*</th><th onClick={() => doSort('category')}>#* category</th><th onClick={() => doSort('wisePieChart')}>wise pie chart</th><th onClick={() => doSort('lo')}># *lo</th></tr></thead>
        <tbody>{sorted.map((r,i) => (<tr key={i}><td>{r.graphShowingSectorDistribution}</td><td>{r.mutualFundsPage}</td><td>{r.category}</td><td>{r.wisePieChart}</td><td>{r.lo}</td></tr>))}</tbody>
      </table>
    </div>
  );
};
export default DashboardTable;