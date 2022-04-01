import React from "react"
import styled from "styled-components"
// import codelablogo from "../Assets/images/codelablogo.png"
import { GoThreeBars } from "react-icons/go"
import {GiCancel} from "react-icons/gi"
import {Link} from "react-router-dom"

const Header =()=>{
const [toggle, setToggle]= React.useState(false)
const toggleChange=()=>{
    setToggle(!toggle)
}
return(
    <Container>
        <Wrapper>
            <Navigation>
            <Logo src="/Assets/images/logo.svg" alt=""/>
                <Logodiv>
               
                    <Navs>
                        <Nav to="/">
                            <Icon src="/Assets/images/home-icon.svg" alt=""/>
                            <span>Home</span>
                        </Nav>

                        <Nav to="/search">
                            <Icon src="/Assets/images/search-icon.svg" alt=""/>
                            <span>Search</span>
                        </Nav>

                       < Nav to="/">
                            <Icon src="/Assets/images/watchlist-icon.svg" alt=""/>
                            <span>Watchlist</span>
                        </Nav>

                       < Nav to="/">
                            <Icon src="/Assets/images/movie-icon.svg" alt=""/>
                            <span>Movie</span>
                        </Nav>
                        <Nav to="/">
                            <Icon src="/Assets/images/movie-icon.svg" alt=""/>
                            <span>Paygo</span>
                        </Nav>

                        <Nav to="/">
                            <Icon src="/Assets/images/movie-icon.svg" alt=""/>
                            <span>Netflix</span>
                        </Nav>
                        </Navs>
                        <Avatar><Avat src="/Assets/images/codelablogo.png" alt=""/></Avatar>
                </Logodiv>
                <BuggerHold>
                    {toggle ? <GoThreeBars size="36px" color="white" onClick={toggleChange}/> : <GiCancel size="36px" color="white" onClick={toggleChange}/> }
                    {/* <GoThreeBars size="36px" color="white"/> */}
                </BuggerHold>
                
            </Navigation>
        </Wrapper>
    </Container>
)
}

export default Header;






const Container = styled.div`
width:100%;
height:70px;
background:#090b13;
display:flex;
justify-content:center;
align-items:center;
`

const Wrapper = styled.div`
width:90%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`

const Navigation= styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:750x;
height:50px;
width:100%;
/* background:blue; */
`

const Logodiv= styled.div`
display:flex;
flex:1;
flex-direction:row;
justify-content:space-between;
width:85%;
@media screen and (max-width:768px){
    display:none;
}
/* background:green; */
/* background:yellow; */
`

const BuggerHold=styled.div`
display:none;
@media screen and (max-width:768px){
    display:block;
}
    
`

const Logo= styled.img`
height:50px;
width:100px;
object-fit:contain;
`
const Navs= styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
width:50%;
/* background:red; */
`

const Nav= styled(Link)`
display:flex;
justify-content:center;
align-items:center;
margin-top:5px;
margin-bottom:5px;
position:relative;
color:white;
transition: all 400ms;
/* height:20px;
width:20px; */
span{
    font-weight:700;
    font-size:15px;
    margin-left:3px;
    
    cursor:pointer;
    position:relative;
    ::after{
        content: "";
        position:absolute;
        height:2px;
        background:#fff;
        left:0;
        right:0;
        bottom:-7px;
        opacity:0;
        transition: all 400ms;
    }
        
    :hover{
        transform: scale(1.1);
        ::after{
       opacity:1;
        }
    }
    
    
}
`

const Icon= styled.img`
height:30px;
width:30px;
`
const Avatar= styled.div`
width:100px;
height:100px;
border-radius:50%;
/* background:red; */
`

const Avat= styled.img`
width:50px;
height:50px;
border-radius:50%;
/* background:red; */
`