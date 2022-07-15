import React, { useState, useEffect } from "react";
import StudentRow from './StudentRow';

export default () => {
    const [students, setStudents] = useState([]);

    const deleteStudent = (id, index) => {
        fetch("http://localhost:8085/student/" + id, { method: "DELETE" })
            .then(() => {
                setStudents(students.splice(index, 1))
                console.log(`Student ${id} deleted.`)
            })
    }

    useEffect(() => {
        fetch("http://localhost:8085/student/getAll")
            .then(res => res.json())
            .then(res => { setStudents(res) })
    }, [ students ])

    return (
        students.map((student, index) => (
            <StudentRow
                students={students}
                setStudents={setStudents}
                student={student}
                id={student.id}
                deleteStudent={deleteStudent}
                index={index}
            />
        ))
    )
}