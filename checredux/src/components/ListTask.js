import React from 'react'
import {useSelector} from 'react-redux'

const ListTask = () => {
    const todo = useSelector(state => state.TodoReducer.todos)
    return (
        <div>
            {todo.map(el=>
                <div key={el.id}> 
                    <h3>{el.description}</h3>
                    <div className="task">
                        <button>Delete</button>
                        <button>Done</button>
                        <button>Edit</button>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default ListTask;


