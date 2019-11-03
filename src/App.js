import React, { useState } from 'react';
import Table from './components/tables';
import AddForm from './components/addForm';
import './App.css';

const App = () => {
  const userData = [
    { id: 1, firstName: 'victor', surname: 'Iheanacho', dob: '12/21/21', age: 67, height: '1.8m' },
    { id: 2, firstName: 'sane', surname: 'daniel', dob: '12/21/21', age: 56, height: '1.8m' },
    {id: 3, firstName: 'matic', surname: 'nemanja', dob: '64/21/21', age: 89, height: '2.8m'}
  ];

  const [users, setUsers] = useState(userData);

  const addUser = user => {
    user.id = user.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className='container'>
      <h1> Record Management</h1>
        
        <div className=''>
          <h2> Add user</h2>
          <AddForm addUser={ addUser } />
        </div>

        <div className=''>
          <h2>View Users</h2>
          <Table users={ users } deleteUser={ deleteUser }/>
        </div>

    </div>
  )
}

export default App;
