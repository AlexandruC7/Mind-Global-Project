import React from "react";

import { Contacte } from "./components/contacte/contacte";
import { Desprenoi } from "./components/desprenoi/desprenoi";
import { Header } from "./components/header/header";
import { Servicii } from "./components/servicii/servicii";
import { Homepage } from "./components/homepage/homepage";
import { Button } from "./components/button/button";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Desprenoi />
      <Servicii />
      <Button variant="success"> Success Button</Button>
      <Button variant="danger"> Danger Button</Button>
      <Button variant="warning"> Warning Button</Button>
      <Button variant="primary"> Primary Button</Button>
      <Button variant="secondary"> Secondary Button</Button>

      <Contacte />

    </div>
  );
}

export default App;
