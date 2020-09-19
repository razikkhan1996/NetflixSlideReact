import React from 'react';
import {Card,Button,Modal} from 'react-bootstrap';
import { useState } from 'react';



const Box=(props) =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(

        <>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <img src={props.imgsrc} alt="error" style={{width:'100%'}} />
        </Modal.Body>
      </Modal>
            
        <br/>
        <Card style={{ width: '18rem'}} >
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="danger" onClick={handleShow}>Explore-></Button>
        </Card.Body>
        </Card>

        </>
    )
}


export default Box;
