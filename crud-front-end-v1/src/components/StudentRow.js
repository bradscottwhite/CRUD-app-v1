import React, { useState } from 'react';

export default ({ student, id }) => {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(student.name);
    const [address, setAddress] = useState(student.address);
    
    const editStudent = () => { setEditable(!editable) }

    const updateStudent = () => {
        setEditable(false);
        fetch("http://localhost:8085/student/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, name, address })
        })
            .then(() => {
                console.log(`Student ${id} updated.`)
            })
    }

    const deleteStudent = () => {
        fetch("http://localhost:8085/student/" + id, { method: "DELETE" })
            .then(() => {
                console.log(`Student ${id} deleted.`)
            })
    }

    return (
        <tr>
            <td>{id}</td>
            <td>
                {!editable ?
                    name :
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />}
            </td>
            <td>
                {!editable ?
                    address :
                    <input
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />}
            </td>
            <td>
                <button onClick={() => editStudent()}>Edit</button>
            </td>
            <td>
                <button onClick={() => updateStudent()}>Update</button>
            </td>
            <td>
                <button onClick={() => deleteStudent()}>Delete</button>
            </td>
        </tr>
    )
}