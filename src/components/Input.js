import React, { useState, useCallback } from "react";
import Button from "./Button";
import Text from "./Text";
import update from 'immutability-helper';

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

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = tasks[dragIndex];
        setTasks(update(tasks, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [tasks]);

    const renderText = (task, index) => {
        return (<Text key={task.id} index={index} id={task.id} text={task.text} moveCard={moveCard} onDelete={deleteTask}/>);
    };

    return(
        <>
            {tasks.map((task, index) => renderText(task, index))}
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