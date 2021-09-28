import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Message = ()=>{

    return(
        <Container className="blog" fluid>
            <h3 className="text-center p-5 text-dark"> Blog</h3>
            <Container className="">
            

                    <Row className="">

                    <Col  className="d-flex justify-content-center align-items-center" xs={12} md={6}>  
                    
                  
                    <Image src="Banner/wall8.jpg" className="h-100 w-75" fluid /> 

               

                    </Col>

                    <Col className="" xs={12} md={6}>

                        <h4 className="pt-1 text-dark">
                        Best beach resort in Goa on Betalbatim beach!
                        </h4>
                        <p className="text-dark pt-3"> Welcome to Beleza By The Beach — a step into lore, culture, and untainted beauty. Soak up the glories of South Goa, the scintillating sun, and the pristine white sandy beaches of Colva amidst a wonderland that is both art and heart. Start your day with a steady swish of the waving sea at Betalbatim beach. Unwind with a blissful dip into the picturesque pools or a visit to our tranquillizing spa. Look forward to elevating your mood in vast, green paddy fields, and delight your taste buds at our truly delectable restaurants — home to some of the choicest cuisines from the land.</p>

                        <Button variant="outline-dark" className="w-25 d-block mx-auto p-2 mt-3">Read More</Button>

                    </Col>

                    </Row>
            </Container>

        </Container>
    )
}
export default Message;