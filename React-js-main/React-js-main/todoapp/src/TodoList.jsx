
import React from "react";


const TodoList = (props) => {

  
    return <>
        <div className="todo_style">

            <i 
                className="fas fa-times" 
                aria-hidden='true' 
                // onClick={props.onSelect}
                onClick={()=>{
                    props.onSelect(props.id);
                }}
            />

            <li>{props.itemval}</li>
        </div>
    </>
}

export default TodoList;