import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
            Name="Model S"
            descrip="Order Online for Touchless Delivery"
            bimg="model-s.jpg"
            btnl="Custom Order"
            btnR="Existing Inventory"
        
            />
            
            <Section 
            Name="Model Y"
            descrip="Order Online for Touchless Delivery"
            bimg="model-y.jpg"
            btnl="Custom Order"
            btnR="Existing Inventory"
       
            />
            <Section 
            Name="Model 3"
            descrip="Order Online for Touchless Delivery"
            bimg="model-3.jpg"
            btnl="Custom Order"
            btnR="Existing Inventory"
          
            />
            <Section 
            Name="Model X"
            descrip="Order Online for Touchless Delivery"
            bimg="model-x.jpg"
            btnl="Custom Order"
            btnR="Existing Inventory"
          
            />
            <Section 
            Name="Solar Panels"
            descrip="Lowest Cost Solar Panels in America"
            bimg="solar-panel.jpg"
            btnl="Order Now"
            btnR="Learn More"
       
            />
            <Section 
            Name="Solar Roof"
            descrip="Produce clean energy from your roof"
            bimg="solar-roof.jpg"
            btnl="Order Now"
            btnR="Learn More"
     
            />
            <Section 
            Name="Accessories"
            descrip=""
            bimg="accessories.jpg"
            btnl="Shop Now"
           
            
            />
            
        </Container>
    )
}


const Container =  styled.div`
height: 100vh;

`

export default Home
