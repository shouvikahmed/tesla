import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ Name, descrip, btnl, btnR, bimg, }) {
    return (
        <>
        <Wrap bgimg={bimg} >
            <Fade bottom>
            
            <ItemText>
                <h1>{Name}</h1>
                <p>{descrip} </p>
            </ItemText>
            </Fade>
            <Button >
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {btnl}
                    </LeftButton>
                    {btnR && 
                        <RightButton>
                            {btnR}
                        </RightButton>
                    }
                    
                </ButtonGroup>
            </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Button>
        </Wrap>
        </>
    )
}

const Wrap= styled.div`
align-items:center;
display:flex;
flex-direction: column;
justify-content: space-between;
width: 100vw;
height: 100vh;
background-size: cover;
background-position:center;
background-repeat: no-repeat;

background-image: ${props=> `url("/images/${props.bgimg}")`}


`
const ItemText=styled.div`
padding-top: 15vh;
text-align: center;
h1{
    margin-bottom: 5px;
}
`
const ButtonGroup= styled.div`
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    @media (max-width: 768px){
        flex-direction:column;
    }

`
const LeftButton=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`
const RightButton =styled(LeftButton)`
background: white;
color: black;
opacity: 0.65;
`

const DownArrow= styled.img`
    margin: 10px;
    height:40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
  

`
const Button=styled.div`
display:flex;
flex-direction: column;
`

{/* <span style={{"textDecoration": "underline", "cursor": "pointer","color": "gray"}}>Touchless delivery</span> */}
export default Section
