import React, { useContext } from 'react'
import { ContextData } from '../context/InfoContext'
import { styled } from 'styled-components';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';

const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding-left: 180px;
  padding-right: 180px;
  min-height: 900px;
`;

const Container = styled.div`
  width: 430px;
  height: 220px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #353535;
  color: white;
  margin-top: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  &:hover{
    transform: translateX(20px);
  }
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
  border-radius: 6px;
  border: none;
  width: 80px;
  height: 30px;
  margin-right: 20px;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #BEFF06;
`;

const Favs = styled.img`
  width: 20px;
`;



const Home = () => {

  const {toggleFavs, filtered, isFav} = useContext(ContextData)
  
  

  return (
    <>
    <SearchBar />
    
    <ContainerCards>
   
      {filtered ? (
        filtered.map(coin => (
          <Container>
            <ContText>
              <Text>Price: {coin.price}</Text>
              <Paragraph>{coin.fullName}</Paragraph>
            </ContText>
            { (coin.id)
              ? <Button onClick={() => toggleFavs(coin.id)}>
                  <span class="material-symbols-outlined">favorite</span>
                </Button>
              : null
            }
            {isFav ? <Modal /> : null}
          </Container>
        ))

      ) : (<p>loading....</p>)}
    </ContainerCards>
    <Pagination />
    </>
  )
}

export default Home