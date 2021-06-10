import React, { useState, useContext } from "react";
import { TasksContext, FunctionContext } from "../TaskContext";
import Button from "./Button";
import Text from "./Text";

export default function Input(prop){
    const boardId = prop;
    const boardName = String(Object.values(boardId));
    const tasks = useContext(TasksContext); 
    const {updateTask, removeTask, moveTask} = useContext(FunctionContext);
    const [text, setText] = useState('')

    const addTask = (text) => {
        const id = Math.floor(Math.random() * 100) + 1
        const newTask = {id, text}
        updateTask(newTask, boardName, false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) return;
        addTask(text)
        setText('')
    }

    const deleteTask = (id) => {
        const newTask = [...tasks];
        removeTask(newTask, boardName, true, false, id)
    }

    const moveNext = (id, move) => {
        const tempTask = [...tasks]
        if(move === 1) {
            moveTask(tempTask, boardName, 1, id); // move right
        }
        else {
            moveTask(tempTask, boardName, 0, id); // move left
        }
    }

    return(
        <>
            {(tasks[boardId]).map((task) => <Text key={task.id} id={task.id} text={task.text} onDelete={deleteTask} moveNext={moveNext} boardName={boardName}/>)}
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