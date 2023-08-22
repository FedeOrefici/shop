import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    background-color: red;
`;

const Modal = () => {
  return (
    <Container>
        <p>added to favorites </p>
        <span class="material-symbols-outlined">add_ad</span>
    </Container>
  )
}

export default Modal