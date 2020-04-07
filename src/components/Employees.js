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
        <div className="datatable mt-5">
            <table id="table" className="table table-striped table-hover table-condensed">
                <thead>
                    {users.map(user => (
                        <tr key={user.login.uuid.toString()}><th>{`${user.name.first} ${user.name.last}`}</th></tr>
                    ))}
                </thead>
            </table>
        </div>
    );
}
