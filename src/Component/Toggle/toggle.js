import React from 'react';
import styled from "styled-components"

// const Toggles =()=>{
    
//     return (
//        <Container>
//            <Content>
//           <Wrapper>{data?.map((props)=>(
//             <Main key={props.id1}>
//                 <Image  src={props.backgroundImg}
//                 alt=""/> 
//             </Main >
//         ))}
//             </Wrapper> 
//             </Content>
//        </Container>
//     )
// }

// export default Toggles;


// const Container = styled.div`
// width :100%;
// height:100vh;
// background-color:red;
// `

// const Wrapper = styled.div`
// width :100%;
// height:100vh;
// `

// const Main = styled.div`
//  height:100vh;
//  width:100%;
//  /* border-radius:5px; */
 
//  img{
//      height :100%;
//      width:100%;
//      object-fit:cover;
//      /* border-radius:5px; */
//  }

//  `

//  const Content = styled.div``

//  const Image= styled.img`
 
//  `
     

const Top =()=>{
  
     return(
        <Container >
        <Wrapper>
       {/* <Layer1><Disney src="/Assets/images/viewers-disney.png" alt=""/><Pixar src="/Assets/images/viewers-pixar.png" alt=""/></Layer1> */}
       <Layer2><Incredibles src = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78"/>  </Layer2>
       <Layer3><Pwrap><Play src="/Assets/images/play-icon-black.png" alt=""/><span>Play</span></Pwrap>
       <Twrap><Trailer src="/Assets/images/play-icon-white.png" alt=""/><span>Trailer</span> </Twrap><Plus/><People/></Layer3>
       <Layer4><Writeup>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</Writeup></Layer4>
       </Wrapper>
      </Container>
     )
 }

export default Top;

const Container = styled.div`
width:100%;
height: 100vh;
background-color:white;
background-image:url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg");
display: flex;
align-items:center;
`
const Wrapper=styled.div`
height:90%;
width:50%;
margin-top:300px;
/* background-color:green; */

`
const Layer1 = styled.div`
display:flex;
width:20%;
margin-top:50px;
/* background-color:pink; */
`
const Disney = styled.img`

/* background-image:url("/Assets/images/viewers-disney.png"); */

height:50px;
width:200px;
object-fit:contain;
/* background-color:red; */
`
const Pixar = styled.img`
height:50px;
width:200px;
object-fit:contain;
/* background-color:yellow; */

`
const Pwrap=styled.div`
width: 100px;
height: 30px;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
align-content:center;
border-radius:5px;
/* margin-top:30px; */
`
const Play = styled.img`
height:20px;
width:30px;
object-fit:contain;
`
const Twrap=styled.div`
width: 100px;
height: 30px;
background-color:none;
border:1px solid white;
/* opacity:0; */
display:flex;
justify-content:center;
align-items:center;
align-content:center;
border-radius:5px;
color:white;
`
const Trailer = styled.img`
height:20px;
width:30px;
object-fit:contain;
`
const Plus = styled.div``
const People = styled.div``

const Layer2 = styled.div`
width:40%;
height:70px;
/* background-color:green; */
display:flex;
justify-content:center;
align-items:flex-start;
`
const Incredibles = styled.img`

height:70px;
width:500px;
object-fit:cover;
/* background-color:red; */
margin-right:50px;
`
const Layer3 = styled.div`
display:flex;
margin-top:30px;
`
const Layer4 = styled.div``
const Writeup = styled.div`
color:white;
margin-top:50px;
`

