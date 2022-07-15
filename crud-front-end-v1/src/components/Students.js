import React, { useState, useEffect } from "react";
import StudentRow from './StudentRow';

export default () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8085/student/getAll")
            .then(res => res.json())
            .then(res => { setStudents(res) })
    }, [])

    return (
        students.map(student => (
            <StudentRow student={student} id={student.id}/>
        ))
    )
}