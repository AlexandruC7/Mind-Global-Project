import React from "react";

import { Contacte } from "../components/contacte/contacte";
import { Desprenoi } from "../components/desprenoi/desprenoi";
import { Header } from "../components/header/header";
import { Servicii } from "../components/servicii/servicii";
import { Homepage } from "../components/homepage/homepage";

function Home() {
  return (
    <div>
      <Header />
      <Homepage />
      <Desprenoi />
      <Servicii />
      <Contacte />
    </div>
  );
}

export default Home;
