
import React from 'react'
import Container from "react-bootstrap/Container";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import SplitType from 'split-type';
import './Discover.css'
function Discover() {

     useGSAP(() => {
        const ourTxt = new SplitType('.h-1',{types:'chars'});
        const chars = ourTxt.chars

        gsap.fromTo(chars,{
            color:'#d1d1d1'
        },{
            color:'black',
            duration:'0.5',
            stagger:0.1,
            scrollTrigger:{
                trigger:'.h-1',
                start:'top 50%',
                end:'bottom 50%',
                scrub:true,
                // markers:true
            }
        }) 
      },[])
  return (
    <div>
        <Container className='mt-5 text-black '>
           <h1 className='mb-5 pb-5 mt-5 pt-5 h-1'>Inspired by the structural order and visual logic of Swiss graphic design, Forma applies these principles to furniture, shaping elements that seamlessly integrate into spaces.</h1>

           <h1 className='mt-5 pt-5 fw-bold '>KERI ROSE <span style={{fontSize:'20px'}}>Designer</span></h1>
           <img src="/Images/designer.webp" alt="" style={{width:'300px'}} className='imf-fluid' />
        </Container>
    </div>
  )
}

export default Discover