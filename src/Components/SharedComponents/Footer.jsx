import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from 'react-router-dom'; // 1. Import Link

import './Footer.css'
function Footer() {
  return (
    <div className='mt-5 pt-5'>
        <div className='bg-black w-100'>
            <Row className='p-3 ms-auto me-auto fw-semibold'> 
                <Col lg = {3}>
                <ul style={{listStyle:'none',color:'white'}} className='p-0'>
                    <li><Link to='/' className='footer-link'>Home</Link> </li>
                    <li><Link to='/Store' className='footer-link'>Store</Link></li>
                    <li><Link to = '/About' className='footer-link'>About</Link></li>
                    <li><Link to = '/Contact' className='footer-link'>Contact</Link></li>
                </ul>
                </Col>

                 <Col lg = {3}>
                <ul style={{listStyle:'none',color:'white'}} className='p-0'>
                    <li>Instagram</li>
                    <li>Email</li>
                   
                </ul>
                </Col>

                 <Col lg = {3}>
                <ul style={{listStyle:'none',color:'white'}} className='p-0'>
                    <li>License</li>
                    <li>Changelog</li>
                    <li>Design system</li>
                    
                </ul>
                </Col>

                 <Col lg = {3}>
                <p className='copyright fw-normal'>2025 Company All Rights Reserved</p>
                </Col>
            <h1  className='text-white footer-logo'>Forma</h1>

            </Row>

        </div>
    </div>
  )
}

export default Footer