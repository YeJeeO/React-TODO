import { useState } from "react";
import {putTodo} from "./ToDoList"

const Form = (props)=>{
    const [value, setValue]=useState("");

    return <>
    <form className="form" onSubmit={e=>{
        e.preventDefault();
        props.putTodo(value);
        setValue("");
    }}>
        <input type="text" placeholder="Enter task..." className="input" value={value} onChange={e=>{setValue(e.target.value)}} />
    </form>
    </>

}
export default Form;