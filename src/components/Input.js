import React, { useState } from "react";
import Button from "./Button";
import Text from "./Text";

export default function Input(){
    const [tasks, setTasks] = useState([]) // [id, text]
    const [text, setText] = useState('') // state

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 100) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addTask({ text })
        setText('')
        console.log("Save")
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return(
        <>
            {tasks.map((task, index) => <Text id={task.id} text={task.text} index={index} onDelete={deleteTask} />)}
            <form onSubmit={onSubmit}>
                <div className="w-4/5 inline-block">
                    <input 
                        className="rounded-lg shadow-md bg-gray-50 border-2 border-gray-200 w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" 
                        type="text" 
                        placeholder="Input" 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    /> 
                </div>
                <div className="w-1/5 inline-block">
                    <Button name="Submit" />
                </div>
            </form>  
        </>
        
        
    );
}