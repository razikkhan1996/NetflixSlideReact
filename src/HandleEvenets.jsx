import React, { useState } from 'react';
import {Button} from 'react-bootstrap';

function HandleEvent()
{
    let purple='#8e44ad';
    let [cval,uval]=useState('hello');
    let [cbg,ubg]=useState(purple);

    function change()
    {
        cval=uval('ohhh yes');
        cbg=ubg('#f1c40f');
    }
    return(
        <>
        <div className="d-flex flex-column align-items-center" style={{backgroundColor:cbg}}>
            <Button variant="dark" onClick={change}>{cval}</Button>
        </div>
        </>
    );
}

export default HandleEvent;