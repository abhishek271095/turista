import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

const Gallery = ()=>{

    return(
        <Container fluid className="bg-dark">
			<h3 className="text-center p-5 text-light">Gallery</h3>
       
	   
	  

    	
    	  <Container className="" >
				
                <Row className="">
                    <Col xs={12} md={3} className="">

                    <Image src="Banner/gall1.jpg" className="m-1" rounded fluid />
                  
                    </Col>

                    <Col xs={12}  md={3} className=" ">
                  
                    <Image src="Banner/gall2.jpg" className="m-1" rounded fluid/>
                        
                    </Col>

                    <Col  xs={12} md={3} className="">
                 
                    <Image src="Banner/gall3.jpg" className="m-1" rounded fluid/>
                
                    </Col>

                    <Col  xs={12}  md={3}className=" ">
                  
                    <Image src="Banner/gall4.jpg"  className="m-1" rounded fluid/>

                    </Col>

                  
                </Row>

     
     
	  
     		 <Row className="mt-2 ">
              <Col xs={12} md={3} className="mb-3">

                <Image src="Banner/gall5.jpg" className="m-1" rounded fluid />

                </Col>

                <Col xs={12}  md={3} className="mb-3 ">

                <Image src="Banner/gall6.jpg" className="m-1" rounded fluid/>
                    
                </Col>

                <Col  xs={12} md={3} className="mb-3">

                <Image src="Banner/gall7.jpg" className="m-1" rounded fluid/>

                </Col>

                <Col  xs={12}  md={3}className="mb-3 ">

                <Image src="Banner/gall8.jpg"  className="m-1" rounded fluid/>

                </Col>
	
    		</Row>



   

	
</Container>



        </Container>
    )
}
export default Gallery;