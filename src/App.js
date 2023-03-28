import React from "react";

import { Contacte } from "./components/contacte";
import { Desprenoi } from "./components/desprenoi/desprenoi";
import { Header } from "./components/header";
import { Servicii } from "./components/servicii";

function App() {
  return (
    <div className="App">
      <Header />
      <Desprenoi />
      <Servicii />
      <Contacte />
    </div>
  );
}

export default App;
