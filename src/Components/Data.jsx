import React, { createContext, useState } from 'react'

export const transferFrom = createContext();

const Data = (props) => {

   

    const [ data , setData] = useState([
        {"Name":"Joe","Age":"25","Course":"HTML","Batch":"August","id":"1"},
        {"Name":"Biden","Age":"27","Course":"Css","Batch":"september","id":"2"},
        {"Name":"Martin","Age":"27","Course":"React","Batch":"December","id":"3"},
        {"Name":"Mary","Age":"23","Course":"Nodejs","Batch":"januauary","id":"4"},
        {"Name":"Rosie","Age":"24","Course":"Database","Batch":"April","id":"5"},
    ])
  return (
    <transferFrom.Provider value = {[data,setData]}>
        {props.children}
    </transferFrom.Provider>
  )
}

export default Data