import React from 'react'

export default function OutputBox() {
    let items = ["Pen","Pencil","Paper"]
  return (
    <div className='output_container'>
    <ul>
    {items.map((item,idx)=>{
        return <li key={idx}>{item}</li>
    })}
    </ul>
  </div>
  )
}
