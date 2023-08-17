import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'
import { styled } from 'styled-components';

const ContainerCards = styled.div`
  display: block;
  column-count: 2;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 70%;
  flex-direction: column;
  margin: auto;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Container = styled.div`
  width: 500px;
  border-radius: 6px;
  height: 220px;
  padding: 10px;
  margin: auto;
  background: linear-gradient(to right, #184E77, #52B69A);
  color: white;
  display: flex;
`;



const Home = () => {

  const {data} = useContext(ContextData)
  const coinData = data?.Data


  return (
    <ContainerCards>
      {coinData ? (
        coinData.map(coin => (
          <Container>
            <p>{coin.CoinInfo?.FullName}</p>
            <p>Price: {coin.DISPLAY?.USD.PRICE}</p>
            <p>Volume 24 hours: {coin.DISPLAY?.USD.VOLUME24HOUR}</p>
            <p>Market Cap: {coin.DISPLAY?.USD.MKTCAP}</p>
          </Container>
        ))
      ) : (<p>loading....</p>)}
    </ContainerCards>
  )
}

export default Home