import React from 'react'

export default function List() {
    let items = ["Pen","Pencil","Paper"]
    let arrOfHtml = items.map((item,idx)=>{
        return <li key={idx}>{item}</li>
    })

  return (
    <>
    <br/>
    <h2>List</h2>
    <ul>
        {arrOfHtml}
        
    </ul>
    <ul>
      {items.map((item,idx)=>{
        return <li key={idx}>{item}</li>
    })}
    </ul>
    </>
    
  )
}
