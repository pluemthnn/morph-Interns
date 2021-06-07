import React from "react";

export default function Button({ name, id, onDelete }) {
    return (
        <>
            {name === "Submit" && <button className='btn btn-submit'>{name}</button>}
            {name === "X" &&  <button className='btn btn-close' onClick={() => onDelete(id)}>{name}</button>}
            {/* {name === "<" && <button className='btn btn-prev-next'>{name}</button>}
            {name === ">" && <button className='btn btn-prev-next'>{name}</button>} */}
        </>
    )
}
