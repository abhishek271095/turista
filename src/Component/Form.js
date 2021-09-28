import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FormControl from 'react-bootstrap/FormControl'

import { Container } from 'react-bootstrap';




const Contact=()=>
{
  return(
      
        <Container className="" fluid>
        <h3 className="text-center pt-5"> Contact Us</h3>
            <Row className="mt-5">
                <Col className="col-md-6 " xs={12}  >
               
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1431092.0205217632!2d92.37505009921031!3d12.436449259969526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1632810667326!5m2!1sen!2sin" className="h-100 w-100 p-3" style={{'border':`0`}} allowfullscreen="" loading="lazy"></iframe>



                </Col>
          
                <Col className="col-md-6 " xs={12}>
                <Form  className="p-4 ">
            <Row className="mb-3 ">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                
                </Form.Group>
                
            </Row>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Message </Form.Label>
                <FormControl as="textarea" aria-label="With textarea" />

            </Form.Group>

           

            <Button variant="outline-dark" type="submit"  className="mx-auto d-block w-25">
                Submit
            </Button>
    </Form></Col>
               
            </Row>
        </Container>

  );
}
  
export default Contact;