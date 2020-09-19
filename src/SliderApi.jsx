import React, { useEffect, useState } from 'react';
import axios from 'axios';


const SliderApi=()=>
{
    const[item,setitem]=useState([]);
    useEffect(()=>
    {
        async function getdata()
        {
            const res=await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
            console.log(res.data);
            setitem(res.data);
        }

        getdata();
    });
    return(
        <>
        <ul className="gallery_list">
            {item.map((val)=>
            {
            return(<li style={{listStyle:"none"}}><img className="utility effect" src={`https://picsum.photos/200/300?random=${val.id}`} alt="error"/></li>);
            })}
        </ul>
        </>
    )
}

export default SliderApi;