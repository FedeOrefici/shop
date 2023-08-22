import React, { useContext, useState } from 'react'
import { ContextData } from '../context/InfoContext'
import { styled } from 'styled-components'

const Container = styled.div`
    color: black;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 830px;
    color: white;
    margin-top: 50px;
    margin-bottom: 100px;
    width: 100%;
`;

const ContainerPages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const ContNumbers = styled.div`
    width: 350px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #353535;
`;

const Buttons = styled.button`
    background-color: #353535;
    color: #BEFF06;
    border: none;
    width: 48px;
    height: 40px;
    border-radius: 3px;
    cursor: pointer;
`;



const Pagination = () => {


    const {setPages, pages, max} = useContext(ContextData)

    const handleNext = () => {
        setPages(pages + 1)
    }

    const handleBack = () => {
        if(pages < 2) return;
        setPages(pages - 1)
    }


  return (
    <Container>
        <ContainerPages>
            <Buttons onClick={handleBack} disabled={pages === 1}>
                <span class="material-symbols-outlined">skip_previous</span>
            </Buttons>
            <ContNumbers>
                <p>Page</p>
                <p style={{color:'#BEFF06'}}>{pages}</p>
                <p>of</p>
                <span>{max}</span>
            </ContNumbers>
            <Buttons onClick={handleNext} disabled={pages === max}>
                <span class="material-symbols-outlined">skip_next</span>
            </Buttons>
        </ContainerPages>
    </Container>
  )
}

export default Pagination