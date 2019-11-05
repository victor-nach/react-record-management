import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/tables';
import AddForm from './components/addForm';
import EditForm from './components/editForm';
import './App.css';

const App = () => {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    async function fetchUsers() {
      const {data} = await axios.get('https://cashbox-backend-node.herokuapp.com/records');
      setUsers(data.data);
    }
    fetchUsers();
  }, [users]);

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
