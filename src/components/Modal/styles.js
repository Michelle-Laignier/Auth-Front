import styled from "styled-components";

export const Container = styled.div`
  animation: warning ease-in-out 0.6s;
  background-color: ${({ theme }) => theme.COLORS.HEADER};
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 1.2rem;
  height: 50px;
  text-align: center;
  width: 100vw;

  align-items: center;
  display: flex;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  @keyframes warning {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0);
    }
  }
`
