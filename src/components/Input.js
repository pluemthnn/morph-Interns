import React, { useContext, useState } from "react";
import { TasksContext, FunctionContext } from "../App";
import Button from "./Button";
import Text from "./Text";

export default function Input(prop){
    const boardId = prop;
    const boardName = String(Object.values(boardId));
    const tasks = useContext(TasksContext); 
    const updateTask = useContext(FunctionContext);
    const [text, setText] = useState('') // state

    const addTask = (text) => {
        const id = Math.floor(Math.random() * 100) + 1
        // const newTask = [...tasks, {id, text}]
        const newTask = {id, text}
        updateTask(newTask, boardName, false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) return;
        addTask(text)
        setText('')
        console.log("Save")
    }

    const deleteTask = (id) => {
        const newTask = [...tasks];
        updateTask(newTask, boardName, true, false, id)
        console.log("Delete")
    }

    const moveNext = (id, move) => {
        const moveTask = [...tasks]
        if(move === 1) updateTask(moveTask, boardName, false, true, 1, id); // move right
        else updateTask(moveTask, boardName, false, true, 0, id); // move left
        console.log("Move")
    }

    return(
        <>
            {(tasks).map((task) => <Text key={task.id} id={task.id} text={task.text} onDelete={deleteTask} moveNext={moveNext} boardName={boardName}/>)}
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