import React from 'react'

export default function Employee(props) {
    let index = props.data.index;
    let {name,picture,email,phone}=props.data.user;
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td><img src={picture.thumbnail} alt="Smiley face" height="42" width="42"></img></td>
            <td>{name.last}</td>
            <td>{name.first}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}
