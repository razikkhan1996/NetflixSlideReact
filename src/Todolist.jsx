import React,{useState} from 'react';
import {Card,Button} from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Input } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import List from './List.jsx';



function Todolist()
{
    const [item,setitem]=useState('');
    const [newitem,updateitem]=useState([]);

    const inputchange=(event)=>
    {
        setitem(event.target.value);
    }

    const add=()=>
    {
        updateitem((preval)=>
        {
            return[...preval,item];
        });

        setitem("");
    }

    

    
    return(
        <>
        <div style={{height:'100vh',width:'100%',border:'1px solid black'}}className="d-flex  justify-content-center align-items-center ">
            <Card style={{width:'20rem',height:'300px'}} >
            <Card.Body>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center">
                        <Input type='text' placeholder='Enter The Item' onChange={inputchange}  value={item}/>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                    <Tooltip title="Add Item" aria-label="add">
                    <Fab color="primary">
                        <AddIcon onClick={add}/>
                    </Fab>
                    </Tooltip>
                    </div>
                </div>
                <br/>
                <br/>

                <Card.Text>
                <div className="row">
                    <ol>
                    {newitem.map((val,index)=>
                    {
                        return (
                        <>
                        {/* <li style={{listStyle:'none',textDecoration: line?'line-through':null}}>
                        <span onClick={deleteitem}><DeleteIcon /></span>
                            
                        {val}</li> */}
                        <List key={index} text={val}/>
                        </>);
                    })}
                    </ol>
                </div>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        </>   
     );
}

export default Todolist;