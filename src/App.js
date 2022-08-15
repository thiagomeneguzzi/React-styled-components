import React from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
import { useState } from "react";

function App() {

  const [tema, setTema] = useState(false)

  const toggleTema = () => {
    setTema(!tema)
  }

  return (
    <ThemeProvider theme={tema ? temaEscuro : temaClaro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
