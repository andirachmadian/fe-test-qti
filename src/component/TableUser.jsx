import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cekName from '../helpers/cekNameCapitalize';
import ReactNotification from 'react-notifications-component';

import { store } from 'react-notifications-component';
import 'animate.css';
import 'react-notifications-component/dist/theme.css';

const TableUser = (props) => {
  const defaultData = {
    names: '',
    lastNames: '',
    emails: '',
  };

  const [dataUser, setDataUser] = useState([]);
  const [form, setForm] = useState(defaultData);

  const setFormData = (e, param) => {
    const { value } = e.target;

    // ganti state form
    setForm({
      ...form,
      [param]: value,
    });
  };
  // ganti kapital nama depan
  const capitalizeFirstName = (e) => {
    const text = cekName(e);

    setForm({
      ...form,
      name: text,
    });
  };
  // ganti kapital nama belakang
  const capitalizeLastName = (e) => {
    const text = cekName(e);
    setForm({
      ...form,
      lastName: text,
    });
  };

  // memanggil api dengan axios
  const getUserData = async () => {
    await axios
      .get('https://reqres.in/api/users/')
      .then((response) => {
        setDataUser(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // notifikasi input
  const handleNotificationSucces = () => {
    store.addNotification({
      title: 'Peringatan!',
      message: 'Selamat Anda Berhasil Menambahkan Data',
      type: 'success',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],

      dismiss: {
        duration: 2000,
        showIcon: true,
      },
      width: 300,
    });
  };

  // notifikasi delete
  const handleNotificationDelete = () => {
    store.addNotification({
      title: 'Peringatan!',
      message: 'Anda Telah Menghapus Data!',
      type: 'danger',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],

      dismiss: {
        duration: 2000,
        showIcon: true,
      },
      width: 300,
    });
  };

  // untuk menambah data ke list
  const pushData = () => {
    setDataUser((prevState) => {
      return [...prevState, form];
    });

    setForm(() => defaultData);
  };

  // delete list
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
      <ReactNotification />

      <h3 className='is-size-5 has-text-weight-bold'>Data User</h3>

      <div className='column is-full'>
        <div className='box'>
          <div className='box form'>
            <div className='columns is-multiline'>
              <div className='column is-one-fifth'>
                <div className='field'>
                  <div className='control'>
                    <input value={form.name} onChange={(e) => setFormData(e, 'first_name')} onBlur={(e) => capitalizeFirstName(e)} className='input is-primary' type='text' placeholder='First Name' />
                  </div>
                </div>
              </div>
              <div className='column is-one-fifth'>
                <div className='field'>
                  <div className='control'>
                    <input value={form.lastName} onChange={(e) => setFormData(e, 'last_name')} onBlur={(e) => capitalizeLastName(e)} className='input is-primary' type='text' placeholder='Last Name' />
                  </div>
                </div>
              </div>
              <div className='column is-one-fifth'>
                <div className='field'>
                  <div className='control'>
                    <input value={form.email} onChange={(e) => setFormData(e, 'email')} className='input is-primary' placeholder='Email' type='email' />
                  </div>
                </div>
              </div>
              <div className='column is-one-fifth'>
                <div className='field'>
                  <div className='control'>
                    <button
                      onClick={() => {
                        pushData();
                        handleNotificationSucces();
                      }}
                      className='button is-primary is-fullwidth'
                    >
                      Input
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <button
                    className='button is-danger'
                    onClick={() => {
                      deleteData(index);
                      handleNotificationDelete();
                    }}
                  >
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
