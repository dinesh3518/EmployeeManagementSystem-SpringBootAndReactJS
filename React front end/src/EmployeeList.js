import { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const fetchEmployees = async () => {
        const response = await axios.get('http://localhost:8080/api/employees');
        setEmployees(response.data);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleEdit = async(id) => {
        const res = axios.get(`http://localhost:8080/api/employees/${id}`);
        setSelectedEmployee(res);
        //console.log(selectedEmployee);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/employees/${id}`);
        fetchEmployees();
    };

    const handleFormSubmit = () => {
        setSelectedEmployee(null);
        fetchEmployees();
    };

    return (
        <div className='row d-flex'>
            <div className='col card p-5 m-5'>
            <h2 className='text-center'>Employee List</h2>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.mobileNumber}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>
                                <div className="d-flex gap-3">
                                <button className="badge bg-success" onClick={() => handleEdit(employee.id)}>Edit</button>
                                <button className="badge bg-danger" onClick={() => handleDelete(employee.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        <div className='col'>
            <EmployeeForm employee={selectedEmployee} onSubmit={handleFormSubmit} />
        </div>
        </div>
        
    );
};

export default EmployeeList;
