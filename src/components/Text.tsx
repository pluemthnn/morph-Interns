import React from "react";
import Button from "./Button";

interface TextProps {
    id: number
    text: string
    handleDelete:(id: number) => void
    handleMove:(id: number, move: number) => void
    boardName: string
}

const Text:React.FC<TextProps> = ({ id, text, handleDelete, handleMove, boardName }) => {
    return (
        <>
            <div className="w-full bg-pink-50 rounded-lg p-3 my-2 flex justify-center">
                {boardName === "todo" ? "" : 
                    <div className="inline-block fixed mr-72">
                        <Button name="<" id={id} handleMove={handleMove} handleDelete={handleDelete} />
                    </div>
                }
                <div className="inline-block">
                    <p key={id} className="inline-block align-middle">{text}</p>
                </div>
                <div className="inline-block fixed ml-52">
                    <Button name="X" id={id}  handleMove={handleMove} handleDelete={handleDelete}/>
                </div> 
                {boardName === "approve" ? "" :
                    <div className="inline-block fixed ml-72">
                        <Button name=">" id={id} handleMove={handleMove} handleDelete={handleDelete} />
                    </div>
                } 
            </div>
        </>
    )
}

export default Text