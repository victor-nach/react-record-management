import React from 'react';

const Table = ({users, deleteUser, editUser}) => (
    <table className="table table-bordered table-striped thead-dark table-responsive">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Surname</th>
                <th>DOB</th>
                <th>age</th>
                <th>height</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            { users.length > 0 ? (
                users.map(user => (
                    <tr key={user.id}>
                        <td>{ user.firstName }</td>
                        <td>{ user.surname }</td>
                        <td>{ user.dob }</td>
                        <td>{ user.age }</td>
                        <td>{ user.height }</td>
                        <td onClick={() => editUser(user)}><button className="btn btn-primary d-inline">Edit</button></td>
                        <td onClick={() => deleteUser(user.id) }><button className="btn btn-primary d-inline">Delete</button></td>
                    </tr>
                ))
            ) : ( 
                <tr>
                    <td colSpan={7}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default Table;
