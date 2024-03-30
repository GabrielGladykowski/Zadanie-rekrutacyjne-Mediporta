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
  // const base = "https://api.stackexchange.com/";
  // fetch(`${base}2.3/tags?order=desc&sort=popular&site=stackoverflow`)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Response is not okay");
  //     }

  //     return response.json();
  //   })
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error(error));

  return (
    <StyledEngineProvider injectFirst>
      <Global styles={globalStyles} />
    </StyledEngineProvider>
  );
}

export default App;
