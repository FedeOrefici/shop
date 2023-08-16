import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  background-color: blue;
`



const Navbar = () => {
  return (
    <Container>
      <ul>
        <li>products</li>
        <li>your coins</li>
        <li>payments</li>
      </ul>
    </Container>
  )
}

export default Navbar