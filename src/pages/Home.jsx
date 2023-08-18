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
  width: 430px;
  height: 220px;
  padding: 10px;
  margin: auto;
  background-color: #353535;
  color: white;
  margin-top: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
`;

const ContText = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  width: 70%;
  padding: 10px;
  flex-direction: column;
`;

const Paragraph = styled.p`
  color: #BEFF06;
  font-size: 40px;
`;

const Text = styled.p`
  position: relative;
  top: 50px;
`;

const Button = styled.button`
  background-color: #353535;
  border-radius: 6px;
  border: none;
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top: 20px;
  gap: 10px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #303030;
    color: black;
  }
`;

const Home = () => {

  const {data, toggleFavs} = useContext(ContextData)

  

  return (
    <ContainerCards>
      {data ? (
        data.map(coin => (
          <Container>
            <ContText>
              <Text>Price: {coin.price}</Text>
              <Paragraph>{coin.fullName}</Paragraph>
            </ContText>
              <Button onClick={() => toggleFavs(coin.id)}>
                <span style={{color:'#BEFF06'}} class="material-symbols-outlined">add_circle</span>
                <p style={{color:'white'}}>ADD</p>
              </Button>
          </Container>
        ))
      ) : (<p>loading....</p>)}
    </ContainerCards>
  )
}

export default Home