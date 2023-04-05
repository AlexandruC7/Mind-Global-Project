import "./price.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import YardIcon from "@mui/icons-material/Yard";
import SignpostIcon from "@mui/icons-material/Signpost";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import { Serviciu } from "../components/servicii/serviciu/serviciu";
import { Button } from "../components/button/button";

export const Price = () => {
  return <div>
      <div className="servicii">
        <h2>Serviciile</h2>

        <div className="produse">
          <Serviciu
            icon={<AddCardIcon />}
            title={"Cărți de vizită"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."}
            button={<Button variant="warning"> Adaugă în coș</Button>}
          />
          <Serviciu
            icon={<ReceiptIcon />}
            title={"Pliante"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."}
            button={<Button variant="warning"> Adaugă în coș</Button>}
          />
          <Serviciu
            icon={<FeaturedPlayListIcon />}
            title={"Panou Publicitar"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."}
            button={<Button variant="warning"> Adaugă în coș</Button>}
          />
        </div>

        <div className="produse">
          <Serviciu
            icon={<YardIcon />}
            title={"Placuțe Personalizate"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."}
            button={<Button variant="warning"> Adaugă în coș</Button>}
          />
          <Serviciu
            icon={<SignpostIcon />}
            title={"Semne Contravenționale"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."}
            button={<Button variant="warning"> Adaugă în coș</Button>}
          />
          <Serviciu
            icon={<NoCrashIcon />}
            title={"Colatare Auto"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."}
            button={<Button variant="warning"> Adaugă în coș</Button>}
          />
        </div>

      </div>

      <div className="icon"></div>
  </div>;
};

