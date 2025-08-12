import React from 'react';
import { tsx } from './components/tsx';
import { react } from './components/react';
import { library } from './components/library';
import { Header } from './components/Header';
import { DataTable } from './components/DataTable';

function App() {
  return (
    <div className="app">
      <tsx />
      <react />
      <library />
      <Header />
      <DataTable />
    </div>
  );
}

export default App;