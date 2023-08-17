import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'
import { styled } from 'styled-components';

const Container = styled.div`
  width: 40%;
  border-radius: 6px;
  height: 200px;
  padding: 10px;
  margin: auto;
  background: linear-gradient(to right, #184E77, #52B69A);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const ContainerCards = styled.div`
  display: block;
  column-count: 2;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 70%;
  flex-direction: column;
  margin: auto;
`


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