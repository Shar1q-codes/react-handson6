import React, { useContext, useState } from 'react'
import { transferFrom } from './Data'
import {Link} from 'react-router-dom'

const AddStudent = () => {
    const [Name , setName ] = useState("")

    const [Age , setAge] = useState("")

    const [Course , setCourse] = useState("")

    const [Batch , setBatch] = useState("")

    const [students , setStudents]=useContext(transferFrom)

    const changeHandler1 = (e)=>{
        setName(e.target.value)
    }

    const changeHandler2 = (e)=>{
        setAge(e.target.value)
    }

    const changeHandler3 = (e)=>{
        setCourse(e.target.value)
    }

    const changeHandler4 = (e)=>{
        setBatch(e.target.value)
    }

    const submitHandler = ()=>{
        setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString()}])
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

export default AddStudent