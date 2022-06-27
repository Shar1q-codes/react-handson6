import React , {useState } from 'react'
// import { transferFrom } from './Data'
import { Link } from 'react-router-dom'

 const Edit = () => {
    const [Name , setName ] = useState("")

    const [Age , setAge] = useState("")

    const [Course , setCourse] = useState("")

    const [Batch , setBatch] = useState("")

    const [students , setStudents]=useState({
        "Name" : "",
        "Age" : "",
        "Course" : "",
        "Batch" : ""
    })

    const changeHandler1 = (e)=>{
        setName(e.target.Name)
    }

    const changeHandler2 = (e)=>{
        setAge(e.target.Age)
    }

    const changeHandler3 = (e)=>{
        setCourse(e.target.Course)
    }

    const changeHandler4 = (e)=>{
        setBatch(e.target.Batch)
    }

    const submitHandler = ()=>{
        setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch}])
    }
  return (
    <div>
        <label htmlFor="" className='label'>Name</label>
    <br />
    <input type="text" id='name' name='name' value={Name} onChange={changeHandler1} className='input' />
    <br />
    <label htmlFor="" className='label'>Age</label>
    <br />
    <input type="text" id='age' name='age' value={Age} onChange={changeHandler2} className='input'/>
    <br />
    <label htmlFor="" className='label'>Course</label>
    <br />
    <input type="text" id='course' name='course' value={Course} onChange={changeHandler3} className='input'/>
    <br />
    <label htmlFor="" className='label'>Batch</label>
    <br />
    <input type="text" id='batch' name='batch' value={Batch} onChange={changeHandler4} className='input' />

    <div>
        <Link to="/students" className='submit'>Cancel</Link>
        <Link to="/students" onClick={submitHandler} className='submit'>Confirm</Link>
    </div>
    </div>
  )
}

export default Edit