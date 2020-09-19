import React from 'react';
import {Button,Nav,Navbar,Form,FormControl} from 'react-bootstrap';
import Box from './Box.jsx';
import Data from './Data.jsx';


const Event=() =>{

    // console.log(Data);
    return(

        <>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2 " />
                <Button variant="outline-info mt-1">Search</Button>
                </Form>
        </Navbar.Collapse>
        </Navbar>
            

        <div className=" m-auto d-flex flex-wrap justify-content-between w-100">
                {Data.map(
                    (val)=>{
                        return(
                            <Box imgsrc={val.imgsrc}
                        title={val.title}
                        /> 
                        );
                        
                    }
                )}
        </div>
         </>

        
    )
}


export default Event;