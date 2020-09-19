import React, { useState } from 'react';
import {Alert} from 'react-bootstrap';


function Forms()
{
    let [name,uname]=useState('');
    let [cname,sname]=useState('');
    let [pass,upass]=useState('');
    let [passold,passnew]=useState('');



    function inputchange(event)
    {   
        console.log(event.target.value);
        uname(event.target.value);
    }


    function inputchange2(event)
    {
        upass(event.target.value);
    }

    function submit(event)
    {
        event.preventDefault();
        sname(name);
        passnew(pass)
    }
    return(
        <>
        <form onSubmit={submit}>
        <div className="d-flex flex-column align-items-center">
            <br/>
            <Alert variant="success">  {cname} {passold}</Alert>
            <br/>
            <input type="text" placeholder="Enter Your First Name" onChange={inputchange} value={name}/>
            <br/>
            <input type="text" placeholder="Enter Your Password" onChange={inputchange2} value={pass}/>
            <br/>
            <button>Submit</button>
        </div>
        </form>
        </>
    );
}

export default Forms;