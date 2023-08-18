import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'

const YourCoins = () => {

  const {favorites} = useContext(ContextData)
  console.log(favorites, 'aca lo favorito papa!');

  return (
    <div>
      hola
    </div>
  )
}

export default YourCoins