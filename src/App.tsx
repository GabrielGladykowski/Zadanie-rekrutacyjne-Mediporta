import "./App.css";
import { Global, css } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material/styles";
import { Layout } from "./commponents/Layout";
import { TagsTable } from "./commponents/TagsTable";

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
    background: #d6d6d6;
    position: relative;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100dvh;
    height: 100%;
  }

  #root {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Global styles={globalStyles} />
      <Layout>
        <TagsTable />
      </Layout>
    </StyledEngineProvider>
  );
}

export default App;
