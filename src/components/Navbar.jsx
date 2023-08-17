import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #184E77;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const ContLink = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  padding: 10px;
`



const Navbar = () => {
  
  return (
    <Container>
      <ContLink>
        <NavLink style={{textDecoration:'none', color:'white'}} to='/home'>home</NavLink>
        <NavLink style={{textDecoration:'none', color:'white'}} to='/yourCoins'>your coins</NavLink>
        <NavLink style={{textDecoration:'none', color:'white'}} to='/trade'>trade</NavLink>
      </ContLink>
    </Container>
  )
}

export default Navbar