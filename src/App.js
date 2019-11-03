import React, { useState } from 'react';
import Table from './components/tables';
import AddForm from './components/addForm';
import EditForm from './components/editForm';
import './App.css';

const App = () => {
  const userData = [
    { id: 1, firstName: 'victor', surname: 'Iheanacho', dob: '12/21/21', age: 67, height: '1.8m' },
    { id: 2, firstName: 'sane', surname: 'daniel', dob: '12/21/21', age: 56, height: '1.8m' },
    { id: 3, firstName: 'matic', surname: 'nemanja', dob: '64/21/21', age: 89, height: '2.8m' }
  ];

  const [users, setUsers] = useState(userData);

  const [editStatus, setEditStatus] = useState(false);

  const initialFormState = {
    id: null,
    firstName: '',
    surname: '',
    dob: '',
    age: '',
    height: '',
  }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editUser = user => {
    setEditStatus(true);
    setCurrentUser({ ...user })
  }

  const updateUser = (id, updatedUser) => {
    setEditStatus(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  }

  const addUser = user => {
    user.id = user.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = id => {
    setEditStatus(false);
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className='container'>
      <h1> Record Management</h1>

      <div>
        {
          editStatus ? (
            <div>
              <h2>Edit User</h2>
              <EditForm 
                currentUser={currentUser}
                updateUser={updateUser}
                setEditStatus={setEditStatus}
                editStatus={editStatus}
              />
            </div>
          ) : (
              <div className=''>
                <h2> Add user</h2>
                <AddForm addUser={addUser} />
              </div>
            )
        }
      </div>

      <div className=''>
        <h2>View Users</h2>
        <Table users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>

    </div>
  )
}

export default App;
