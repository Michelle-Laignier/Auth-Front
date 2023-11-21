import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 55% 45%;
  justify-items: center;
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }

  img {
    height: 100vh;
    width: 100%;

    @media screen and (max-width: 768px) {
      position: absolute;
      z-index: -1;
    }
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: fit-content;

  @media screen and (max-width: 900px) {
    margin: 0 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .input {
    margin: 1.5rem 0;
  }

  .createBtn {
    align-self: center;
    background: none;
    border: none;
    font-size: 1.2rem;
    width: fit-content;
  }

  .createBtn:hover {
    color: ${({ theme }) => theme.COLORS.BTN};
  }
`