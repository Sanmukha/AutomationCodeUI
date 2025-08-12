import React, { useState, useMemo } from 'react';
import './Interaction.css';

interface Row {
  emailId: string;
  mobileNumber: string;
  jobDetails: string;
  locations: string;
  requirements: string;
}

const initialData: Row[] = [
  {
    "emailId": "email id 1",
    "mobileNumber": "mobile number 1",
    "jobDetails": "job details 1",
    "locations": "locations 1",
    "requirements": "requirements: 1"
  },
  {
    "emailId": "email id 2",
    "mobileNumber": "mobile number 2",
    "jobDetails": "job details 2",
    "locations": "locations 2",
    "requirements": "requirements: 2"
  },
  {
    "emailId": "email id 3",
    "mobileNumber": "mobile number 3",
    "jobDetails": "job details 3",
    "locations": "locations 3",
    "requirements": "requirements: 3"
  },
  {
    "emailId": "email id 4",
    "mobileNumber": "mobile number 4",
    "jobDetails": "job details 4",
    "locations": "locations 4",
    "requirements": "requirements: 4"
  },
  {
    "emailId": "email id 5",
    "mobileNumber": "mobile number 5",
    "jobDetails": "job details 5",
    "locations": "locations 5",
    "requirements": "requirements: 5"
  }
];

export const Interaction: React.FC = () => {
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
        <thead><tr><th onClick={() => doSort('emailId')}>email id</th><th onClick={() => doSort('mobileNumber')}>mobile number</th><th onClick={() => doSort('jobDetails')}>job details</th><th onClick={() => doSort('locations')}>locations</th><th onClick={() => doSort('requirements')}>requirements:</th></tr></thead>
        <tbody>{sorted.map((r,i) => (<tr key={i}><td>{r.emailId}</td><td>{r.mobileNumber}</td><td>{r.jobDetails}</td><td>{r.locations}</td><td>{r.requirements}</td></tr>))}</tbody>
      </table>
    </div>
  );
};
export default Interaction;