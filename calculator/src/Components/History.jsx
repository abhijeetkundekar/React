import React from 'react'

export default function History(props) {
 
  //let items = ["Pen","Pencil","Paper"]
  return (
    <div>
       {/* <button onClick={submit}>History</button> */}
       <ul>
      {props.items.map((item,idx)=>{
        return <li key={idx}>{item}</li>
    })}
    </ul>
      </div>
  )
}
