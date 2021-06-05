import React from "react";
import Button from "./Button";

export default function Text ({ tasks, onDelete }) {
    return (
        <>
            {tasks.map((task) => {
                return (
                    <div className="w-full bg-pink-50 rounded-lg p-2 my-2 flex justify-center">
                        <div className="inline-block fixed mr-72">
                            <Button name="<" />
                        </div>
                        <div className="inline-block">
                            <p key={task.id} className="inline-block align-middle">{task.text}</p>
                        </div>
                        <div className="inline-block fixed ml-56">
                            <Button name="X" task={task} onDelete={onDelete} />
                        </div>  
                        <div className="inline-block fixed ml-72">
                            <Button name=">" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}