import React, { useState } from 'react'
import styled from 'styled-components'
import styledComponents from 'styled-components'
import {selectCars} from "../features/car/carSlice";
import {useSelector} from "react-redux";

function Header() {

    const [menu, setMenu] = useState(false)

    const cars=useSelector(selectCars)
  
    return (
        <Container className='header'>
            <a style={{'cursor':"pointer"}}>
                <img src="/images/logo.svg" alt="" />
            </a>
            
            <Menu className='menu'> 

                {cars && cars.map((car, index)=>(

                    <li><a key={index} href="#">{car}</a></li>
                ))}
               
               
               
            </Menu>
            <HeaderRight>
            <RightMenu className='rightmenu'>
                <a href="#">Shop</a>
                <a href="#"> Account</a>
            </RightMenu>
            <CustomMenu onClick={()=> setMenu(true)}>Menu</CustomMenu>
           
            <SidebarMenu className='sidebarmenu' show={menu}>
                <CloseWrap>
                    <CustomClose onClick={()=> setMenu(false)} >X</CustomClose>
                </CloseWrap>
                
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">More</a></li>
            </SidebarMenu>
            
            </HeaderRight>

        </Container>
    )
}

export default Header

const Container= styled.div`
    z-index:1;
    justify-content: space-between;
    position: fixed;
    margin-top: 2px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    min-height: 60px;
    top:0;
    left:0;
    right:0;
`
const Menu=styled.div`
   
    display:flex;
    align-items: center;
    justify-content: center;
    flex:1;
    
    li{
        
        list-style: none;
        padding: 0 10px;
        text-wrap: no-wrap;
    }
    li:hover{
        background: #0000000D;
        border-radius: 15px;
        
    }

`
const RightMenu=styled.div`

a{
   

    padding: 0 10px;
    text-wrap: no-wrap;
}
a:hover{
    background: #0000000D;
    border-radius: 12px;
    
}

`

const CustomMenu=styled.div`

:hover{
    background: #0000000D;
    border-radius: 12px;
    
}

padding: 0 10px;
cursor:pointer;
`

const HeaderRight=styled.div`
    display: flex;
`

const SidebarMenu = styled.div`
    transform: ${props=> props.show? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    background: #F9F6EE;
    width: 300px;
    z-index:16;
    list-style: none;
    padding: 50px;
  
    
    li{ 
        
        padding: 12px;
        overflow-y: scrollable;  

        a{
            font-size: 16px;
        }
    }

`
const CustomClose=styled.div`
    cursor: pointer;
    font-weight: 600;
    padding: 5px
    
`

const CloseWrap=styled.div`
display:flex;
justify-content: flex-end;
`