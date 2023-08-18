import React, { useContext, useState } from 'react'
import { styled } from 'styled-components'
import { ContextData } from '../context/InfoContext';

const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin: auto;
    width: 81%;
    height: 50px;
    gap: 5px;
    margin-top: 40px;
`;

const Input = styled.input`
    width: 85%;
    height: 30px;
    border-radius: 3px;
    border: 1px solid gray;
    background-color: #353535;
    color: white;
    padding-left: 20px;
`;

const Button = styled.button`
    width: 15%;
    height: 34px;
    border-radius: 3px;
    border: none;
    background-color: #BEFF06;
    cursor: pointer;
    &:hover{
        background-color: #95C900;
    }
`;

const SearchBar = () => {

    const {search, setSearch} = useContext(ContextData)

  return (
    <Container>
        <Input value={search} onChange={(event) => setSearch(event.target.value)} type='text' placeholder='type here...' />
    </Container>
  )
}

export default SearchBar