import React, { useState } from 'react';

export default () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')

    const addStudent = () => {
        const student = { name, address }
        console.log(student)
        fetch("http://localhost:8085/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            setName('')
            setAddress('')
            console.log("New student added!")
        })
    }

    return (
        <div>
            <h2>Add Student:</h2>
            <input 
                placeholder="Student Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                placeholder="Student Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            <button
                onClick={addStudent}
            >Add</button>
        </div>
    )
}