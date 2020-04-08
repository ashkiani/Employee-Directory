import React, { useState, useEffect } from 'react'
import API from '../utils/API';
import Employee from "./Employee";

export default function Employees() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let filUsers = [];
        if (search !== "") {
            filUsers = users.filter(user => { return (user.name.first.includes(search) || user.name.last.includes(search)) });
            
        }
        else {
            filUsers = users;
        }
        setFilteredUsers(filUsers);
    }, [search,users]);

    useEffect(() => {
        API.getUsers()
            .then(results => results.json())
            .then(data => {
                setUsers(data.results);

            });
    }, []); // <-- Have to pass in [] here!

    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-0">

                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="input-group my-3">
                        <input type="text" className="form-control" placeholder="Search By Employee Name" id="searchText" onChange={e=>setSearch(e.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="searchBtn"><i
                                className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-0">

                </div>
            </div>
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
                    {filteredUsers.map((user, index) => (
                        <Employee key={user.login.uuid.toString()} data={{ "index": index, "user": user }} />
                    ))}
                </tbody>
            </table>
        </>

    );
}
