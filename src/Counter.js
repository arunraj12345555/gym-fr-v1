import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export const Counter = () => {
    const {name, setName} = useState('0');

    const changaName =() => {
        setName(name+1);
    }

    useEffect(()=>{
        console.log("Effect")

    })
  return (
    <div>
        {/*<h1>{name}</h1>*/}

        
        <button onClick={changaName}>click Here</button>
        <Link to={Counter}></Link>
    </div>
  )
}
