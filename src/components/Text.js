import React from "react";
import { useDrag } from "react-dnd";
import Button from "./Button";

export default function Text ({ id, text, index, moveCard, onDelete }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "crad",
        item: () => {return{ id, index }},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
    }))

    const opacity = isDragging ? 0.4 : 1;
    
    return (
        <>
            <div className="w-full bg-pink-50 rounded-lg p-2 my-2 flex justify-center" ref={drag} style={{opacity}}>
                <div className="inline-block fixed mr-72">
                    <Button name="<" />
                </div>
                <div className="inline-block">
                    <p key={id} className="inline-block align-middle">{text}</p>
                </div>
                <div className="inline-block fixed ml-56">
                    <Button name="X" id={id} onDelete={onDelete} />
                </div>  
                <div className="inline-block fixed ml-72">
                    <Button name=">" />
                </div>
            </div>
        </>
    )
}