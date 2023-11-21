import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.HEADER};
  display: flex;
  height: 100px;
  justify-content: space-around;

  div {
    display: flex;
    font-size: 1.4rem;
    gap: 0.5rem;
  }

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    transition: 0.3s;
  }

  button:hover {
    background: none;
    color: ${({ theme }) => theme.COLORS.BTN};
  }
`