import React from "react"
import styled from "styled-components"
import Slides from "../Homecomponent/Slider/slider"
import Viewers from "../Viewers/viewers"
import Recommend from "../Recommend/recommend"
import Toggles from "../Toggle/toggle"
import Detail from "../Details/details"
 const Home =()=>{
     return(
    <Container>     
    <Slides/>
    <Viewers/>
    <Recommend/>
    {/* <Detail/> */}
    {/* <Toggles/> */}
    </Container>
     )
 }

 export default Home;
 const Container = styled.div`
 height:100%;
 min-height:100vh;
 width:100%;
 position:relative;

 :before{
     content:"Hello";
     position: absolute;
     top:0;
     bottom:0;
     right: 0;
     left: 0;
     background-image: url("/Assets/images/home-background.png");
     background-repeat: no-repeat;
     background-size: cover;
     z-index: -1;

 }
 `