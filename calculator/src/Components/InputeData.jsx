import React from 'react'
import { useState } from 'react'

export default function InputeData(props) {
    const [val1, setVal1] = useState(0.0);
    const [val2, setVal2] = useState(0.0);
    const [operator, setOperator] = useState('+');
    const operatorList = ['+','-','*','/','%'];

    const submit=()=>{
        //console.log("submit clicked")
        var op1 = parseFloat(val1);
        var op2 = parseFloat(val2);
        var c=0;
        switch(operator){
            case '+' :  c = op1 + op2;
                      console.log("here"+c);
                      break;
            case '-' : c = op1 - op2;
                      console.log("here"+c);
                      break;
            case '*' :  c = op1 * op2;
                      console.log("here"+c);
                      break;
            case '/' : c = op1 / op2;
                      console.log("here"+c);
                      break;
            case '%' : c = op1 % op2;
                      console.log("here"+c);
                      break;

        }
       
        props.getAnswer(c)
        setVal1(0.0)
        setVal2(0.0)
    }
    const setInput1=(e)=>{
        console.log("val1")
        console.log(e)
        setVal1(e.target.value)
        
    }
    const setInput2=(e)=>{
        console.log("val2")
        setVal2(e.target.value)
    }
  return (
    <div>
        
            <input type='number' id="1" step={0.0}
            value={val1} onChange={setInput1}>
            </input>
            <input type='number'  id="2" step={0.0}
             value={val2} onChange={setInput2}>
             </input>
            <select id="operator" name="operator" disabled={!operatorList.length} 
                value={operator}  
                onChange={e=>setOperator(e.target.value)}>
                 <option value="" />
                    {operatorList.map(operator => (
                          <option key={operator} value={operator}>{operator}</option>
                      ))}
                </select>
            
    
        <button onClick={submit}>submit</button>
    </div>
  )
}
