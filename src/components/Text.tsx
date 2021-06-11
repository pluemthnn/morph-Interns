import React from "react";
import { TextProps } from "../@types/interfaces";
import Button from "./Button";

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