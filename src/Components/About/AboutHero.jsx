import React from "react";
import { Container } from "react-bootstrap";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
function AboutHero() {

    
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
                start:'top 5%',
                end:'bottom 40%',
                scrub:true,
            }
        })},[])
  return (
    <div>
      <Container className="mt-5 pt-5 text-black mb-5 pb-5 sub-hero-h1-1">
        <h1 className="mt-5 pt-5">
          Forma is a material-driven minimalist furniture brand that embodies
          the structural order and functionality of Swiss graphic design.
        </h1>
      </Container>
    </div>
  );
}

export default AboutHero;
