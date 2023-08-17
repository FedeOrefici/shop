import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'
import { styled } from 'styled-components';

const Container = styled.div`
  width: 40%;
  border-radius: 6px;
  height: 200px;
  padding: 10px;
  margin: auto;
  background: linear-gradient(#52B69A, #184E77);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`


const Home = () => {

  const {data} = useContext(ContextData)
  const coinData = data?.Data


  return (
    <>
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
    </>
  )
}

export default Home