import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'
import { styled } from 'styled-components';

const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Container = styled.div`
  border-radius: 6px;
  height: 220px;
  padding: 10px;
  margin: auto;
  background: linear-gradient(to left, #184E77, #52B69A);
  color: white;
  margin-top: 10px;
  width: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

const ContText = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  padding-left: 100px;
`;

const Paragraph = styled.p`
  font-weight: bold;
  font-size: 50px;
`;

const Text = styled.p`
  position: relative;
  bottom: 60px;
`;

const Button = styled.button`
  background-color: yellow;
  border-radius: 6px;
  border: none;
`;

const Home = () => {

  const {data, toggleFavs} = useContext(ContextData)

  

  return (
    <ContainerCards>
      {data ? (
        data.map(coin => (
          <Container>
            <ContText>
              <Paragraph>{coin.fullName}</Paragraph>
              <Text>Price: {coin.price}</Text>
              <Button onClick={() => toggleFavs(coin.id)}>
                <span class="material-symbols-outlined">star</span>
              </Button>
            </ContText>
          </Container>
        ))
      ) : (<p>loading....</p>)}
    </ContainerCards>
  )
}

export default Home