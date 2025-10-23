import React from "react";
import Container from "react-bootstrap/Container";

import './Subhero.css'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { useGSAP } from "@gsap/react";

import SplitType from 'split-type';


function SubHero() {

    useGSAP(() => {
        const ourTxt = new SplitType('.sub-hero-h1-1',{types:'chars'});
        const chars = ourTxt.chars

        gsap.fromTo(chars,{
            color:'#d1d1d1'
        },{
            color:'black',
            duration:'0.5',
            stagger:0.1,
            scrollTrigger:{
                trigger:'.sub-hero-h1-1',
                start:'top 50%',
                end:'bottom 50%',
                scrub:true,
            }
        })




        // image transition
        const tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.image-container',
      start:'top 80%',
      end:'bottom 80%',
      scrub:1,
    }
   })

   tl.from('.material-img-1',{
    
    scale:0.8,
    xPercent:105

   },0)

   tl.from('.material-img-2',{
    
    scale:0.8

   },0)
   tl.from('.material-img-3',{
    xPercent:-105,
    scale:0.8
   },0)
    },[])

   
  return (
    <div>
      <Container style={{height:'1000px'}}>
        <h1 className="sub-hero-h1-1 mt-5 pt-5" >
          Forma is a material-driven minimalist furniture brand that embodies
          the structural order and functionality of Swiss graphic design.
        </h1>

        <div className="d-flex mt-5 pt-5 gap-5">
            <h5>Vision</h5>
            <h5 className="">Redefining minimalism through material authenticity and design order</h5>

            
        </div>
        <div className="d-flex align-items-center justify-content-center image-container">
                <img src="/Images/material-1.webp" alt="" className="material-img material-img-1"/>
                <img src="/Images/material-2.webp" alt="" className="material-img material-img-2"/>
                <img src="/Images/material-3.webp" alt="" className="material-img material-img-3"/>
            </div>
      </Container>
    </div>
  );
}

export default SubHero;
