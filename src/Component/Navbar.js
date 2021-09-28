import React from 'react';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col' 



const Navigation = ()=>{

    //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)

    const [show, setShow] = useState(false);
    const [Show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const signUp = () => setShow1(true);

    
   
    const changeBackground = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 200) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }

    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })

    return(
        <div>
            <Navbar collapseOnSelect expand="lg" className={navbar ? "navbar active" : "navbar"} fixed="top" >
                <Container>
               
                     <Navbar.Brand href="#home">

                     <img
                            className="d-block w-25 "
                            src="Banner/logo2.png"
                            alt="First slide"
                        /> 
                     </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="bg-light" />
               
                     <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto ">

                            <Nav.Link href="#features" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#pricing" className="text-light">About</Nav.Link>
                            <Nav.Link href="#features" className="text-light">Serives</Nav.Link>
                            <Nav.Link href="#pricing" className="text-light">Contact</Nav.Link>
                            
                        </Nav>

                         <Nav>
                            <Nav.Link onClick={handleShow} className="text-light" >Sign In</Nav.Link>
                            <Nav.Link eventKey={2} onClick={signUp} className="text-light"> Sign Up</Nav.Link>

                         
                         </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            

            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Sign In</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Password" />
                                  </Form.Group>



                                </Modal.Body>
                                <Modal.Footer className="d-flex justify-content-center" >
                                <Button variant="secondary" onClick={handleClose}>
                                   log in
                                </Button>
                              
                                </Modal.Footer>
                            </Modal>


                            <Modal show={Show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                <Modal.Title>Sign Up</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    
                                    </Form.Group>

                                  <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                  </Form.Group>

                                  <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Password" />
                                  </Form.Group>



                                </Modal.Body>
                                <Modal.Footer className="d-flex justify-content-center" >
                              
                                <Button variant="secondary" onClick={handleClose1}>
                                   Sign up
                                </Button>
                              
                                </Modal.Footer>
                            </Modal>
        </div>
    )
}
export default Navigation;
