import React from 'react';
import { functional } from './components/functional';
import { functional } from './components/functional';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Form } from './components/Form';

function App() {
  return (
    <div className="app">
      <functional />
      <functional />
      <Login />
      <Signup />
      <Form />
    </div>
  );
}

export default App;