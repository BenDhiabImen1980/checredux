import { v4 as uuidv4 } from 'uuid';
import { ADD_NEW } from '../actions/types';

let todos=[
    {
    id:uuidv4(), 
    description:"checkpoint",
    isDone:false,
    },
    {
     id:uuidv4(), 
     description:"check",
     isDone:false,
     }
]
const TodoReducer=(state={todos,filt:"no"},action)=>{
switch (action.type) {
    case ADD_NEW:
        return{...state,todos:[...state.todos,action.payload]}
    default:
    return state;
}
}
export default TodoReducer;
