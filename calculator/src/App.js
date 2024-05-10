import logo from './logo.svg';
import './App.css';
import InputeData from './Components/InputeData';
import History from './Components/History';
import { useEffect, useState } from 'react'
import axios from 'axios'
function App(props) {
  const [items, setItems] = useState([]);

  // const getAnswer=(item)=>{
  //   console.log("Value is",item)
  //   let listArr =[...items,item]
  //   setItems(listArr)
  // }

  // return (
  //   <div>
  //     <InputeData getAnswer={getAnswer}></InputeData>
     
  //     {/* <h1>data is:{result}</h1> */}
  //     <History items={items}></History>
  //   </div>
  // );

  const [users,setUsers] = useState([])
  useEffect(function(){
    (async function() {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log("data is ",res.data)
      setUsers(res.data)
    })()
    
  }, [])
  return(
    <><h1>Fetching data{console.log("I will execute first")}</h1>
    {users.length == 0 ? <h2>...loading</h2>:
      <ul>
        {users.map((user,idx)=>{
          return <li key={idx}>{user.name}</li>
        })}
      </ul>
      
  }
    
    </>
    
  )

  
}

export default App;
