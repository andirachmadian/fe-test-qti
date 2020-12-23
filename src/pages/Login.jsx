import React from 'react';

const logIn = () => {
  return (
    <>
      <div className='columns'>
        <div className='column'></div>
        <div className='column is-4'>
          <div className='container'>
            <h1 className='is-size-3 has-text-weight-bold'>Log In</h1>
            <div className='field'>
              <p className='control has-icons-left has-icons-right'>
                <input className='input' type='email' placeholder='Email' />
                <span className='icon is-small is-left'>
                  <i className='fas fa-envelope'></i>
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-check'></i>
                </span>
              </p>
            </div>
            <div className='field'>
              <p className='control has-icons-left'>
                <input className='input' type='password' placeholder='Password' />
                <span className='icon is-small is-left'>
                  <i className='fas fa-lock'></i>
                </span>
              </p>
            </div>
            <div className='field'>
              <p className='control'>
                <button className='button is-success'>Login</button>
              </p>
            </div>
          </div>
        </div>
        <div className='column'></div>
      </div>
    </>
  );
};

export default logIn;
