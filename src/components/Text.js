import React, { useReducer } from "react";
import { useRef } from 'react';
import { useDrag, useDrop } from "react-dnd";
import Button from "./Button";

export default function Text ({ id, text, index, moveCard, onDelete }) {
    const ref = useRef(null); 

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "crad",
        item: () => {return{ id, index }},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
    }))

    const opacity = isDragging ? 0.4 : 1;  

    const [{ handlerId }, drop] = useDrop({
        accept: "crad",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return; // Don't replace items with themselves

            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            // Dragging down
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging up
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            
            item.index = hoverIndex;
        },
    });

    drag(drop(ref));
  
    return (
        <>
            <div className="w-full bg-pink-50 rounded-lg p-3 my-2 flex justify-center" ref={ref} style={{opacity}}>
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