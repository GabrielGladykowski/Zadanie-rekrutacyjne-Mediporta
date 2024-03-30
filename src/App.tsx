import "./App.css";
import { Global, css } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material/styles";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #ffffff;
    position: relative;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100dvh;
    height: 100%;
  }
`;

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Global styles={globalStyles} />
    </StyledEngineProvider>
  );
}

export default App;
