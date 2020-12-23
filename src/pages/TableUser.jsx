import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TableUser = (props) => {
  const [dataUser, setDataUser] = useState([]);

  const getUserData = async () => {
    await axios
      .get('https://reqres.in/api/users/')
      .then((response) => {
        setDataUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteData = (index) => {
    const newField = [...dataUser];
    newField.splice(index, 1);

    setDataUser(newField);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <div className='container'>
        <div className='notification is-primary'>
          This container is <strong>centered</strong> on desktop and larger viewports.
        </div>
      </div>
      <br />
      <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Action</th>
          </tr>
        </thead>

        {dataUser.map((e, index) => {
          return (
            <tbody>
              <tr key='id'>
                <td>{index + 1}</td>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
                <td>{e.email}</td>
                <td>
                  <img src={e.avatar} />
                </td>
                <td>
                  <button className='button is-danger' onClick={() => deleteData(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default TableUser;
