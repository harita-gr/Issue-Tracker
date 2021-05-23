import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        // <div className='footer'>
        //     <h3>Copyright &copy; 2021 @ Harita Ravindranath </h3>
        // </div>
        <footer>
        <Container>
          <Row>
            <Col className='text-center'> <h6>Copyright &copy; 2021 @ Harita Ravindranath </h6></Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer
