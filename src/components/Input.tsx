import React, { useState } from "react";
import { useTasks, useUpdateTask } from "../TaskContext";
import { InputProps, ITask, ITasks } from "../@types/interfaces"
import Button from "./Button";
import Text from "./Text";

const Input:React.FC<InputProps> = ({ boardId }) => {
    const boardName = boardId;
    const tasks: ITasks = useTasks(); 
    const { updateTask, removeTask, moveTask } = useUpdateTask();
    const [text, setText] = useState('')

    const addTask = (text: string) => {
        const id = Math.floor(Math.random() * 100) + 1
        const newTask = {id, text}
        updateTask(newTask, boardName)
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (!text) return;
        addTask(text)
        setText('')
    }

    const handledeleteTask = (id: number) => {
        const newTask = {...tasks};
        removeTask(newTask, boardName, id)
    }

    const handleMove = (id: number, move: number) => {
        const tempTask = {...tasks}
        if(move === 1) {
            moveTask(tempTask, boardName, 1, id); // move right
        }
        else {
            moveTask(tempTask, boardName, 0, id); // move left
        }
    }
    
    return(
        <>
            {(tasks[boardName]).map((task: ITask) => <Text key={task.id} id={task.id} text={task.text} handleDelete={handledeleteTask} handleMove={handleMove} boardName={boardName}/>)}
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
                    <Button name="Submit" handleDelete={handledeleteTask} handleMove={handleMove} id={0}/>
                </div>
            </form>  
        </>  
    );
}

export default Input