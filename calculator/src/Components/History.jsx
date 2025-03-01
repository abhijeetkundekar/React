import React from 'react'

export default function History(props) {
 
  //let items = ["Pen","Pencil","Paper"]
  return (
    <div className='mt-5 text-center'>
       {/* <button onClick={submit}>History</button> */}
       <ul className='list-group'>
      {props.items.map((item,idx)=>{
        return <li key={idx}>{item}</li>
        
    })}
    </ul>
      </div>
  )
}
