import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'

const Home = () => {

  const {data} = useContext(ContextData)

  const info = (data?.Data?.map(data => data.CoinInfo));
  const values = (data?.Data?.map(data => data?.DISPLAY?.USD))

  return (
    <>
      {(info) ? info?.map(coin => (
        <div key={coin.id}>
          <p>{coin?.FullName}</p>
          <img src={coin?.ImageUrl} />
        </div>
      )) : (
        <div>charging...</div>
      )}
      {values?.map((val, idx) => (
            <div key={idx}>
              <p>price: {val.PRICE}</p>
              <p>market cap: {val.MKTCAP}</p>
            </div>
          ))}
    </>
  )
}

export default Home