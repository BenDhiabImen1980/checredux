import {ADD_NEW} from './types'

 export const Add=(newtask)=>{
    return {
    type: ADD_NEW,
    payload: newtask,
    
    }

}