import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ employee, onSubmit }) => {
    const [name, setName] = useState(employee ? employee.name : '');
    const [mobileNumber, setMobileNumber] = useState(employee ? employee.mobileNumber : '');
    const [email, setEmail] = useState(employee ? employee.email : '');
    const [address, setAddress] = useState(employee ? employee.address : '');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEmployee = { name, mobileNumber, email, address };
        if (employee) {
            await axios.put(`http://localhost:8080/api/employees/${employee.id}`, newEmployee);
        } else {
            await axios.post('http://localhost:8080/api/employees', newEmployee);
            setName('');
            setMobileNumber('');
            setEmail('');
            setAddress('');

        }
        onSubmit();
    };

    return (
        <div className="card border-primary p-5 m-5">
            <h2 className="text-center">{employee ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className="form-label mt-2">Name:</label>
                    <input
                        type="text"
                        value={name}
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className="form-label mt-2">Mobile Number:</label>
                    <input
                        type="text"
                        value={mobileNumber}
                        className="form-control"
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className="form-label mt-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className="form-label mt-2">Address:</label>
                    <input
                        type="text"
                        value={address}
                        className="form-control"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-primary btn-block"  type="submit">{employee ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
