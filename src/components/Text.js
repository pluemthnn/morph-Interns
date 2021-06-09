import React from "react";
import Button from "./Button";

export default function Text ({ id, text, onDelete, moveNext, boardName }) {
    return (
        <>
            <div className="w-full bg-pink-50 rounded-lg p-3 my-2 flex justify-center">
                {boardName === "todo" ? "" : 
                    <div className="inline-block fixed mr-72">
                        <Button name="<" id={id} moveNext={moveNext} />
                    </div>
                }
                <div className="inline-block">
                    <p key={id} className="inline-block align-middle">{text}</p>
                </div>
                <div className="inline-block fixed ml-52">
                    <Button name="X" id={id} onDelete={onDelete} />
                </div> 
                {boardName === "approve" ? "" :
                    <div className="inline-block fixed ml-72">
                        <Button name=">" id={id} moveNext={moveNext} />
                    </div>
                } 
            </div>
        </>
    )
}