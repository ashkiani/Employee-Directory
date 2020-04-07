import React, { useState, useEffect } from 'react'
import API from '../utils/API';

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
        <table class="table">
            <thead class="thead-dark">
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
                    <tr key={user.login.uuid.toString()}>
                        <th scope="row">{index+1}</th>
                        <td><img src={user.picture.thumbnail} alt="Smiley face" height="42" width="42"></img></td>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
