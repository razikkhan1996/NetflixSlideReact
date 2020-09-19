import React, { useState } from 'react';

function Clock()
{
    var time= new Date().toLocaleTimeString(); 

    var [currtime,updtime]=useState(time);

    function change()
    {
        time= new Date().toLocaleTimeString();
        currtime=updtime(time);
    }

    setInterval(change,1000);
    return(

    <h1 className="d-flex flex-column align-items-center">{currtime}</h1>

    );

} 

export default Clock;

