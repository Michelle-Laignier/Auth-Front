import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 16px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG};
    text-align: center;
  }

  body, input, button {
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  input:hover,
  input:focus {
    outline: 3.5px solid ${({ theme }) => theme.COLORS.BTN};
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.BTN};
    transition: 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.COLORS.BTNHOVER};
    cursor: pointer;
  }
`