import React from "react";

interface IBtnParam{
    name: string;
    id: number;
    onDelete: (id: number) => void;
    moveNext: (id: number, move: number) => void;
}

export default function Button({ name, id, onDelete, moveNext }: IBtnParam) {
    const getButton = () => {
        switch(name) {
            case "Submit": return <button className='btn btn-submit'>{name}</button>;
            case "X": return <button className='btn btn-close' onClick={() => onDelete(id)}>{name}</button>; 
            case "<": return <button className='btn btn-prev-next' onClick={() => moveNext(id, 0)}>{name}</button>;
            case ">": return <button className='btn btn-prev-next' onClick={() => moveNext(id, 1)}>{name}</button>;
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
