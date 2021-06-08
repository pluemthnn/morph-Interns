import React, { useContext, useState } from "react";
import { TasksContext, FunctionContext } from "../App";
import Button from "./Button";
import Text from "./Text";

export default function Input(prop){
    const boardId = prop;
    const tasks = useContext(TasksContext); 
    const updateTask = useContext(FunctionContext);
    const [text, setText] = useState('') // state

    const addTask = text => {
        const id = Math.floor(Math.random() * 100) + 1
        const newTask = [...tasks, {id, text}]
        const _delete = false;
        updateTask(newTask, boardId, _delete)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) return;

        addTask({ text })
        setText('')
        console.log("Save")
    }

    const deleteTask = (id) => {
        // setTasks(tasks.filter((task) => task.id !== id))
        const newTask = [...tasks];
        const _delete = true;
        updateTask(newTask, boardId, _delete, id)
    }

    return(
        <>
            {(tasks).map((task) => <Text key={task.id} id={task.id} text={task.text} onDelete={deleteTask}/>)}
            <form onSubmit={onSubmit} className="flex space-x-4 space-y-2">
                <div className="grid-flow-row inline-block w-5/6 pt-2">
                    <input 
                        className="input-task" 
                        type="text" 
                        placeholder="Input" 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    /> 
                </div>
                <div className="grid-flow-row inline-block">
                    <Button name="Submit" />
                </div>
            </form>  
        </>  
    );
}