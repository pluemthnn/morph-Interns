import React from "react";

export default function Input(props){
    const {type = "text", placeholder} = props;
    return(
        <input className="rounded-lg shadow-md bg-gray-50 border-2 border-gray-200 w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" type={type} placeholder={placeholder}></input>
    );
}