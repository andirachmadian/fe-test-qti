import React from 'react';
import Login from '../src/pages/Login';
import Navbar from '../src/layout/Navbar';
import TableUser from './pages/TableUser';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='container is-fullhd'>
        <h3 className='is-size-3 has-text-weight-bold'>Data User</h3>
        <TableUser />
      </div>
    </>
  );
}

export default App;
