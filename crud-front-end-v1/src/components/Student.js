import React from 'react';
import AddStudent from './AddStudent';
import Students from './Students';

export default () => {
    return (
        <div>
            <AddStudent/>

            <div>
                <h1>Students</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Student ID</td>
                            <td>Student Name</td>
                            <td>Student Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        <Students />
                    </tbody>
                </table>
            </div>
        </div>
    );
};