import React from 'react'
import { Container } from 'react-bootstrap'

function ContactHero() {
  return (
    <div>
        <Container className='text-center mt-5 pt-5 text-black d-flex flex-column align-items-center'>
            <h1 className='' style={{fontSize:'80px',lineHeight:'80px',letterSpacing:'-3px'}}> Material defines the <br /> structure precision <br /> refines the details design <br /> creates the experience</h1>
            <img src="/Images/contact-red.webp" alt="" style={{width:'600px'}} className='mt-5 pt-5 img-fluid' />

            <div className='d-flex text-start justify-content-between align-items-center mt-5 pt-5 w-50'>
                <h5>Sales</h5>
                <h6>Studiop@studiop.xyz <br /> +000 5313 3041</h6>
            </div>

            <div className='d-flex  text-start justify-content-between align-items-center mt-5 pt-5 w-50'>
                <h5>Partners</h5>
                <h6>Studio@partner.xyz <br /> +000 38493 402-</h6>
            </div>
        </Container>
    </div>
  )
}

export default ContactHero