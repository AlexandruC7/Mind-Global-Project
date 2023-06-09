import React from "react";

import { Contacte } from "../components/contacte/contacte";
import { Desprenoi } from "../components/desprenoi/desprenoi";
import { Header } from "../components/header/header";
import { Servicii } from "../components/servicii/servicii";
import { Homepage } from "../components/homepage/homepage";

import { Carousel } from "../components/carousel/carousel";

function Home() {
  return (
    <>
      <Header />
      <Homepage />
      <Desprenoi />
      <Servicii />
      <Carousel />
      <Contacte />
    </>
  );
}

export default Home;
