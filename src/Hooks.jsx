import React, { useState } from 'react';

function Hooks()
{
    const [count, setCount] = useState(0);

    function click()
    {
        setCount(count+1);
    }
    return(
        <>
        <div className="d-flex flex-column align-items-center">
        <h1>{count}</h1>
    <h1><button className="btn btn-secondary" onClick={click}><img src="https://i.ytimg.com/vi/oiMQ-iWwdFs/maxresdefault.jpg" alt="Error" style={{width:'100px',height:'50px'}}/></button></h1>
        </div>
        </>
    );
}

export default Hooks;