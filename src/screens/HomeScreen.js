import React from 'react'
import {Link} from 'react-router-dom';
import { Container,Image,Row,Col, Button } from 'react-bootstrap'
import homeImage from '../images/undraw_fixing_bugs_w7gi.png'
import { LinkContainer } from 'react-router-bootstrap';


function HomeScreen() {
    return (
         <Container>
             <Row>
                 <Col sm={6} md={6} lg={8}>
                   <Image src={homeImage} alt="issue tracker image" className="homeImage mx-auto" />                
                 </Col>
                 <Col sm={10} md={6} lg={4} className="features ">
                    <h4> <i class="fas fa-check-circle"></i> Track Issues </h4> 
                    <h4> <i class="fas fa-check-circle"></i> Visual Reports</h4>
                    <h4> <i class="fas fa-check-circle"></i> User friendly</h4>
                    <LinkContainer to="/signin"> 
                        <Button variant='dark' className='mx-3 px-4'>GET STARTED</Button>
                    </LinkContainer>
                 </Col>
             </Row>
         </Container>
    )
}

export default HomeScreen
