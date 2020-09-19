import React ,{useState} from 'react';
import {Card,Button} from 'react-bootstrap';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveIcon from '@material-ui/icons/Remove';

function Increment()
{
    const [increment,setincrement]=useState(0);

    const inc=()=>
    {
        setincrement(increment+1);
    }

    const dec=()=>
    {
        if(increment>0)
        {
        setincrement(increment-1);
        }
        else
        {
            alert('do not proced further');
        }
    }

    return(
        <>
        <div style={{height:'100vh',width:'100%',border:'1px solid black'}}className="d-flex  justify-content-center align-items-center">
            <Card style={{width:'20rem',height:'300px'}}>
            <Card.Body>
                <Card.Text>
                <div className="row d-flex justify-content-center">
                    <h1>{increment}</h1>
                </div>
                </Card.Text>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center">
                        <Button variant="primary" onClick={inc}><ControlPointIcon/></Button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <Button variant="primary" onClick={dec}><RemoveIcon/></Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        
        </div>
        
        </>
    );
}

export default Increment;