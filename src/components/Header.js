import React from "react";
import Input from "./Input.js";

export default function Header(props){
    const {className, name} = props
    return(
    <div>
        <div className={className}>
            <div className="max-w-7xl mx-auto p-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <p className="flex items-center font-extrabold text-xl text-white ">
                        <span className="md:inline">{name}</span>
                    </p>
                </div>
            </div>
        </div>
        <div className="max-h-7xl my-auto">
            <div className="flex items-center justify-between flex-wrap">
                <div className="md:w-full">
                    <Input />
                </div>
            </div>
        </div>
    </div> 
    );
}