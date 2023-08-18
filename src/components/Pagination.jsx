import React, { useContext, useState } from 'react'
import { ContextData } from '../context/InfoContext'
import { styled } from 'styled-components'

const Container = styled.div`
    background-color: white;
    color: black;
    height: 40px;
    font-size: 20px;
    font-weight: 800;
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
        <div>
            <button onClick={handleBack} disabled={pages === 1}>prev</button>
                <p>{pages}</p>
            <button onClick={handleNext} disabled={pages === max}>next</button>
        </div>
    </Container>
  )
}

export default Pagination