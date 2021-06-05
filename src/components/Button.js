import React from "react";

export default function Button({ name, task, onDelete }) {
    return (
        <>
            {name === "Submit" && <button className='btn btn-submit'>{name}</button>}
            {name === "X" &&  <button className='btn btn-close' onClick={() => onDelete(task.id)}>{name}</button>}
            {name === "<" && <button className='btn btn-prev-next'>{name}</button>}
            {name === ">" && <button className='btn btn-prev-next'>{name}</button>}
        </>
    )
}
