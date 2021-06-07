import React from 'react';
import styled from 'styled-components';
import "./medkitslider.css";


const Wrapper = styled.div`
border: 3px solid #00cce4;
height: 60vh;
`;

const Slide = styled.div``;

const MedkitSlider = ({ images  = [] as any, ...props }) => {return(
  <Wrapper {...props}>

   /** to fix images type*/
{images.map((imageUrl: string, index: React.Key | null | undefined) =>(
  <Slide key={index}
  style={{backgroundImage: `url(${imageUrl})`}}
  ></Slide>
))}
  </Wrapper>

)}
 


export default MedkitSlider;