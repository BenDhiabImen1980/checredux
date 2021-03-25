import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Add} from '../actions/TodoActions'
import { v4 as uuidv4 } from 'uuid';

function AddTask() {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    return (
        <div >
            <input type="text" 
                placeholder="write a description"
                value={input}
                onChange={(e)=>{setInput(e.target.value)}}>
            </input>          
   
               <button onClick={()=>{dispatch(Add({id:uuidv4(),
                description:input, isDone:false}))
                setInput('');
            }}
            >Add</button>
                    
        </div>
    )
}

export default AddTask;
