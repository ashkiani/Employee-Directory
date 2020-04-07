import React, { useState, useEffect } from 'react'
import API from '../utils/API';
import Employee from "./Employee";

export default function Employees() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        API.getUsers()
            .then(results => results.json())
            .then(data => {
                setUsers(data.results);

            });
    }, []); // <-- Have to pass in [] here!

    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <Employee key={user.login.uuid.toString()} data={{"index":index,"user":user}} />
                ))}
            </tbody>
        </table>
    );
}
