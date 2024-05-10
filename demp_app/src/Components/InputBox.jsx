import React from 'react'

export default function InputBox() {
    const addTask =()=>{
        console.log("add task called");
    }
  return (
    <div className='input_container'>
    <input type='text'></input>
    <button onClick={addTask}>+</button>
  </div>
  )
}
