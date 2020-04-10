import React, { useState, useEffect } from 'react'
import API from '../utils/API';
import Employee from "./Employee";

export default function Employees() {
    const [users, setUsers] = useState({ users: [], sort: 0 });
    const [filteredUsers, setFilteredUsers] = useState({ users: [], sort: 0 });
    const [search, setSearch] = useState("");


    useEffect(() => {
        API.getUsers()
            .then(results => results.json())
            .then(data => {
                setUsers({ users: data.results, sort: 0 });
            });
    }, []); // <-- Have to pass in [] here!

    useEffect(() => {
        console.log("useEffect for search, users, sort")
        let filUsers = [];
        if (search !== "") {
            filUsers = users.filter(user => {
                let lowerFirst = user.name.first.toLowerCase();
                let lowerLast = user.name.last.toLowerCase();
                let lowerSearch = search.toLowerCase();
                let lowerEmail = user.email.toLowerCase();
                let nameHit = (lowerFirst.includes(lowerSearch) || lowerLast.includes(lowerSearch));
                let emailHit = lowerEmail.includes(lowerSearch);
                let phoneHit = user.phone.includes(lowerSearch);
                return (nameHit || emailHit || phoneHit)
            });
        }
        else {
            filUsers = users.users;
        }
        switch (users.sort) {
            case 1:
                filUsers.sort((a, b) => (a.name.first > b.name.first) ? 1 : (a.name.first === b.name.first) ? ((a.name.last > b.name.last) ? 1 : -1) : -1)
                break;
            case -1:
                filUsers.sort((a, b) => (a.name.first > b.name.first) ? -1 : (a.name.first === b.name.first) ? ((a.name.last > b.name.last) ? -1 : 1) : 1)
                break;
            default:
                break;
        }
        setFilteredUsers({ users: filUsers, sort: users.sort });
    }, [search, users]);

    function sort(e, order) {
        setUsers({ users: filteredUsers.users, sort: order })
    }
    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-0">

                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="input-group my-3">
                        <input type="text" className="form-control" placeholder="Search Employees" id="searchText" onChange={e => setSearch(e.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="searchBtn"><i
                                className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-0">

                </div>
            </div>
            <div className="row justify-content-center">
                <div >Sort Names</div>
                <div className="btn-group btn-group-toggle ml-3 mb-3" data-toggle="buttons">
                    <label className="btn btn-primary">
                        <input type="radio" name="options" id="option2" onClick={e => sort(e, 1)} checked={filteredUsers.sort === 1} onChange={e=>console.log("")} /><i className="fas fa-sort-alpha-down"></i>
                    </label>
                    <label className="btn btn-primary">
                        <input type="radio" name="options" id="option3" onClick={e => sort(e, -1)} /><i className='fas fa-sort-alpha-up-alt'></i>
                    </label>
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
                    {filteredUsers.users.map((user, index) => (
                        <Employee key={user.login.uuid.toString()} data={{ "index": index, "user": user }} />
                    ))}
                </tbody>
            </table>
        </>

    );
}
