import React,{useEffect, useState} from 'react'
import { useAttrs } from 'vue';

export const Post = () => {
    const[post,setpost] = useState();
    useEffect(() =>
        fethc('')
        .then(Response) {

    });
  return (
    <div className='container'>
        {Array.isArray(post)&& post.slice(0.10).map((post) =>{
            <div className='card' key={post,id}>

            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        })}
    </div>
  );
};
