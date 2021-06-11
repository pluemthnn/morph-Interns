import React from "react";

interface IBtnParam{
    name: string;
    id: number;
    handleDelete: (id: number) => void;
    handleMove: (id: number, move: number) => void;
}

const Button:React.FC<IBtnParam> = (props) => {
    const {name, id, handleDelete, handleMove} = props
    const getButton = () => {
        switch(name) {
            case "Submit": return <button className='btn btn-submit'>{name}</button>;
            case "X": return <button className='btn btn-close' onClick={() => handleDelete(id)}>{name}</button>; 
            case "<": return <button className='btn btn-prev-next' onClick={() => handleMove(id, 0)}>{name}</button>;
            case ">": return <button className='btn btn-prev-next' onClick={() => handleMove(id, 1)}>{name}</button>;
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
export default Button
