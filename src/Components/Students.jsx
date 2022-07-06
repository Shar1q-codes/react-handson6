import React, { useContext } from 'react'
import {transferFrom} from './Data'
import {Link} from 'react-router-dom'

const Students = ({handleEditClick }) => {
    

    const [transferTo] = useContext(transferFrom);

    
    
 
  return (
    <div>
        <h1 id='std'>Student Details</h1>
        <Link to = '/students/addStudent'><button className='btn'>Add Student</button></Link>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Course</th>
                    <th scope="col">Batch</th>
                    <th scope="col">Change</th>
                </tr>
            </thead>
            <tbody>
            {transferTo.map((student)=>(
            <tr key={student.id}>
                <td>{student.Name}</td>
                <td>{student.Age}</td>
                <td>{student.Course}</td>
                <td>{student.Batch}</td>
                <td><Link to={`/students/edit/${student.id}`}>Edit</Link></td>
                </tr>))}
            </tbody>
        </table>
    </div>
  )
}

export default Students