import React from "react";

import { Contacte } from "./components/contacte/contacte";
import { Desprenoi } from "./components/desprenoi/desprenoi";
import { Header } from "./components/header/header";
import { Servicii } from "./components/servicii/servicii";
import { Homepage } from "./components/homepage/homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Desprenoi />
      <Servicii />
      <Contacte />
      <Homepage />
    </div>
  );
}

export default App;
