import React, { useEffect, useRef, useState } from 'react';
import Styled from "styled-components"
import { BiChevronDown } from "react-icons/bi"



export default function Card(props) {

  return (
  <>
     <Card className={props._id}>
        <div className="banner-content" style={{ backgroundColor: "#D1EAF1", height:"30rem", flexDirection:"row"}}>
          <div className="banner-content-inside" style={{width:"15.9rem", flexDirection:"column", alignItems:"center"}}>
            <img
              id="banner-image1"
              className="d-block w-100"
              src={props.image}
              alt="First Slide"
              style={{height: "15.375rem"}}
            />
            <div style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
              <h2 style={{ color: "black", opacity: "0.9",margin: "3rem 0px 0px 0px"}}>
                {props.title}
              </h2>
              <br />
              <p style={{ color: "black", opacity: "0.6", marginTop:"0px", margin:"0px" }}>
               {props.author}
              </p>
              <br />
            </div>
          </div>
        </div>
      </Card>
    </>  
  );
}
