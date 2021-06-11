import React from "react";
import { BtnProps } from "../@types/interfaces";

const Button:React.FC<BtnProps> = ({ name, id, handleDelete, handleMove }) => {
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
