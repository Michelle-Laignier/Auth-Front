import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  input {
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.BTNHOVER};
    padding: 1rem 1rem 1rem 3rem;
    width: 100%;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.INPUT};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.BTNHOVER};
    left: 1rem;
    position: absolute;
  }
`