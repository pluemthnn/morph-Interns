import React from "react";

export default function Button({ name, id, onDelete }) {
    const getButton = () => {
        switch(name) {
            case "Submit": return <button className='btn btn-submit'>{name}</button>;
            case "X": return <button className='btn btn-close' onClick={() => onDelete(id)}>{name}</button>; 
            case "<": return <button className='btn btn-prev-next'>{name}</button>;
            case ">": return <button className='btn btn-prev-next'>{name}</button>;
            default: 
                break;
        }
    }

    return (
        <>
            {getButton()}
        </>
    )
}
