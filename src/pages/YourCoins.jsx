import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'
import { styled } from 'styled-components'


const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 20px;
  margin-top: 30px;
`;

const ContainerCard = styled.div`
  background-color: #353535;
  width: 1100px;
  height: 220px;
  color: white;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  line-height: 1px;
  border: 1px solid yellow;
`;

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Title = styled.p`
  font-weight: 100;
`;

const ContainerAll = styled.div`
  border: 1px solid red;
  width: 30%;
`;  




const YourCoins = () => {

  const {favorites} = useContext(ContextData)
  console.log(favorites, 'aca favs');

  return (
    <Container>
      {favorites.map(fav => (
        <ContainerCard key={fav.id}>
          <ContainerAll>
            <p>{fav.price}</p>
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
          <div>
            <p>news</p>
          </div>
        </ContainerCard>
      ))}
    </Container>
  )
}

export default YourCoins