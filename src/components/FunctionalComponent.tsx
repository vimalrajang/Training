import React, { useEffect, useState } from 'react';
import NewComp from './NewComp';

export default function FunctionalComponent(){
    function handleClick(){
        console.log("clicked")
        if(name === "Vimal")
        {
            setName("Vimal Rajan")
        }
        else {
            setName("Vimal")
        }
    }
    useEffect(()=>{
        document.title = name;
    })
    const [name,setName] = useState("Vimal");

return(
    <div>
        <NewComp name={name}/>
        <button onClick={handleClick}>click me</button>
    </div>
);
}