import React from 'react';

const Table = ({users}) => (
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
                    <tr>
                        <td>{ user.firstName }</td>
                        <td>{ user.surname }</td>
                        <td>{ user.dob }</td>
                        <td>{ user.age }</td>
                        <td>{ user.height }</td>
                        <td><button className="btn btn-primary d-inline">Edit</button></td>
                        <td><button className="btn btn-primary d-inline">Delete</button></td>
                    </tr>
                ))
            ) : ( 
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default Table;