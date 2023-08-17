import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  background-color: #184E77;
`
const ContLink = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`



const Navbar = () => {
  
  return (
    <Container>
      <ContLink>
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/yourCoins'>your coins</NavLink>
        <NavLink to='/trade'>trade</NavLink>
      </ContLink>
    </Container>
  )
}

export default Navbar