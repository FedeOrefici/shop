import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid white;
  width: 80%;
  margin: auto;
`
const ContLink = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
`
const ContLogo = styled.div`
  display: flex;
`;


const Navbar = () => {
  
  return (
    <Container>
      <ContLink>
        <ContLogo>
          <h3 style={{color:'white'}}>coin</h3>
          <h3 style={{color:'#BEFF06',fontWeight:'bolder'}}>Shop</h3>
        </ContLogo>
        <NavLink style={{textDecoration:'none', color:'white'}} to='/home'>Home</NavLink>
        <NavLink style={{textDecoration:'none', color:'white'}} to='/yourCoins'>Your coins</NavLink>
      </ContLink>
    </Container>
  )
}

export default Navbar