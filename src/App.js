import React from 'react';
import Login from './component/Login';
import Navbar from '../src/layout/Navbar';
import TableUser from './component/TableUser';
import DummyDashboard from '../src/component/dashboard';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='container is-fullhd'>
        <DummyDashboard />
        <TableUser />
      </div>
    </>
  );
}

export default App;
