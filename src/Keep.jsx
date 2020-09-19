import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


function Keep()
{
    const [item,setitem]=useState();
    const [newitem,updateitem]=useState([]);
    const [line,newline]=useState(false);


    const change=(event)=>
    {
        setitem(event.target.value);
    }


    const click=()=>
    {
        updateitem((preval)=>
        {
            return[...preval,item];
        });

        setitem("");
    }


    const deleteitem=()=>
    {
        newline(true);
    }
    return(
    <>
    <input type="text" placeholder="enter the name" onChange={change} value={item}/>
    <button onClick={click}>Add</button>

    <br/>
    <br/>
    <br/>

    <div className="row">
        {newitem.map((val)=>
        {
            return(
                <>
            <div className="col-4" >
            <ol>
                <li style={{listStyle:'none',textDecoration: line?'line-through':null}}><span onClick={deleteitem}><DeleteIcon/></span>{val}</li>
            </ol>
        </div>
        </>
        );

        })}
        
    </div>
    
    </>
    );
}

export default Keep;