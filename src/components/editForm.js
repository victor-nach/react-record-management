import React, { useState, useEffect } from 'react';

const AddForm = ({ currentUser, updateUser, setEditStatus }) => {
    const [user, setUser] = useState(currentUser);

    useEffect(() => {
        setUser(currentUser)
    }, [currentUser])
    const handleInputChange = event => {
        const { name, value } = event.target      
        setUser({ ...user, [name]: value })
      }

    const handleSubmit = event => {
        event.preventDefault();
        updateUser(user.id, user);
    }
    return (
        <form onSubmit={ handleSubmit } >
            <div className="form-group">
                <label for="firstName">First Name</label>
                <input type="text" required name="firstName" id="firstName" value={ user.firstName } 
                 onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label for="surname">Surname</label>
                <input type="text" required name="surname" id="surname" value={ user.surname } 
                 onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label for="dob">date of Birth</label>
                <input type="dob" required name="dob" id="dob" value={ user.dob }  
                onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label for="age">age</label>
                <input type="age" required name="age" id="age" value={ user.age } 
                onChange={ handleInputChange } />
            </div>

            <div className="form-group">
                <label for="height">height</label>
                <input type="height" required name="height" id="height" value={ user.height } 
                onChange={ handleInputChange } />
            </div>

            <button type="submit" class="btn btn-primary">Edit Record</button>
            <button onClick={() => setEditStatus(false)} class="btn btn-danger ml-1">Cancel</button>
        </form>
    )
}

export default AddForm;
