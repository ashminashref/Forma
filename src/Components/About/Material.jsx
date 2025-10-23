import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Material() {
  return (
    <div>
        <Container className='mt-5 pt-5'>
            <h3 >Material</h3>

<Row className='gy-3 text-center justify-content-center'>
    <Col lg = {4}>
        <img src="/Images/m-1.webp" style={{width:'350px'}} alt="" />

    </Col>
    <Col lg = {4}>
        <img src="/Images/m-2.webp" style={{width:'350px'}} alt="" />

    </Col><Col lg = {4}>
        <img src="/Images/m-3.webp" style={{width:'350px'}} alt="" />

    </Col>
    </Row>                
            
        </Container>
    </div>
  )
}

export default Material