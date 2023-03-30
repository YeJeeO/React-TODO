import { useState } from "react";
import Form from "./Form";


export default function App(){
const[todos, setTodos]=useState([]);
const[allTodos, setAllTodos]=useState(0);

const putTodo=(value)=>{
if(value){
    setTodos([...todos,{id: Date.now(), text: value, done: false}] )
}else {
    console.log("Try again")
}
}
const toggleTodo=(id)=>{
    setTodos(todos.map(todo=>{
        if (todo.id!==id) return todo;
        return{
        ...todo,
        done:!todo.done
         } 
        }))
    }

const removeTodo=(id)=>{
setTodos(todos.filter(todo=>todo.id!==id))
}

const clearAllTodo=()=>{
    setTodos([]);
    setAllTodos(0);
}

    return <>
    <div className="wrapper">
        <div className="container">
            <h1 className="title">TO DO LIST </h1>
            <Form putTodo={putTodo}/>
            <ul className="todos">
                {
                    todos.map(todo=>{
                        return (
                            <li className={todo.done ? "todo done":"todo"} key={todo.id} onClick={()=>toggleTodo(todo.id)}>
                                {todo.text} 
                                <img src="./delete.png" alt="delete" className="deleteItem" onClick={e=>{e.stopPropagation();
                                removeTodo(todo.id);}}/>
                            </li>
                                                    )
                    })
                }
                <button className="clear" onClick={clearAllTodo}>Clear All </button>
            </ul>
        </div>
    </div>
    </>
}