import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 20px;
  margin-top: 30px;
  min-height: 800px;
`;

const ContainerCard = styled.div`
  background-color: #353535;
  width: 1100px;
  height: 220px;
  color: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  line-height: 1px;
`;

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  bottom: 10px;
`

const Title = styled.p`
  font-weight: 600;
`;

const ContainerAll = styled.div`
  width: 30%;
`;  

const Price = styled.p`
  position: relative;
  bottom: 5px;
`;

const NotFavs = styled.div`
  background-color: gray;
  color: white;
  width: 200px;
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  margin-top: 20px;
`;

const ContainerLink = styled.ul`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border: none;
  border-radius: 3px;
  padding: 4px;
  width: 80px;
  height: 30px;
  background-color: #4B4B4B;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #717171;
  }
`;


const YourCoins = () => {

  const {favorites} = useContext(ContextData)

  return (
    <Container>
    {favorites.length > 0 
    ? favorites.map(fav => (

        <ContainerCard key={fav.id}>
          <ContainerAll>
            <Price>{fav.price}</Price>
            <h1 style={{color:'#BEFF06'}}>{fav.fullName}</h1>
            <ContainerText>
              <Title>Volume 24/h:</Title>
              <span>{fav.volume24h}</span>
            </ContainerText>
            <ContainerText>
              <Title>Circulation supply:</Title>
              <span>{fav.circulationSupply}</span>
            </ContainerText>
          </ContainerAll>
          
          <ContainerLink>
            <NavLink style={{textDecoration:'none', color:'white'}} to='https://www.binance.com/' target="_blank">
              <Button>Binance</Button>
            </NavLink>
            <NavLink style={{textDecoration:'none', color:'white'}} to='https://exchange.coinbase.com' target="_blank">
              <Button>Coinbase</Button>
            </NavLink>
            <NavLink style={{textDecoration:'none', color:'white'}} to='https://www.kraken.com' target="_blank">
              <Button>Kraken</Button>
            </NavLink>
            <NavLink style={{textDecoration:'none', color:'white'}} to='https://www.kucoin.com' target="_blank">
              <Button>Kucoin</Button>
            </NavLink>
            <NavLink style={{textDecoration:'none', color:'white'}} to='http://www.bybit.com/' target="_blank">
              <Button>Bybit</Button>
            </NavLink>
          </ContainerLink>

        </ContainerCard>
      ))
    : <NotFavs>no favorites on your list</NotFavs>}
      
    </Container>
  )
}

export default YourCoins