import AddCardIcon from "@mui/icons-material/AddCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import YardIcon from "@mui/icons-material/Yard";
import SignpostIcon from "@mui/icons-material/Signpost";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import MovingIcon from "@mui/icons-material/Moving";

import "./price.scss";
import { ProductsPrice } from "./productsPrice";

export const Price = () => {
  return (
    <div className="PricePage">
      <ProductsPrice
        icon={<AddCardIcon />}
        title="Cărți de vizită"
        preturi={[
          "100 buc - 10 euro",
          "200 buc - 15 euro",
          "500 buc - 20 euro",
          "700 buc - 25 euro",
          "1000 buc - 29 euro",
        ]}
      />
      <ProductsPrice
        icon={<ReceiptIcon />}
        title="Pliante"
        preturi={[
          "A4 pliant in 2 - 0,70 euro/buc",
          "A3 pliant in 2 - 1,20 euro/buc",
          "148*210 -deschis - 0,90 euro",
        ]}
      />
      <ProductsPrice
        icon={<FeaturedPlayListIcon />}
        title="Panou Publicitar"
        preturi={[
          "Ultra mărime ( 1250 mm -5800 *4 mm ) - 150 euro",
          "Mărime medie ( 1000-5000*4 mm ) - 120 euro",
          "Mărime mică ( 800-500*4 mm ) - 100 euro",
        ]}
      />

      <div className="PricePage_product">
        <div className="PricePage_product_title">
          <YardIcon />
          Placuțe Personalizate
        </div>
        <p>
          Placă cu nume (520-110mm )-20 euro <br /> Placă cu text (350-200 mm
          )-25 euro <br />
          Placă luminoasă cu nume (1000-100 mm )-60 euro
        </p>
      </div>
      <div className="PricePage_product">
        <div className="PricePage_product_title">
          <SignpostIcon />
          Semne Contravenționale
        </div>
        <p>
          Adresa personalizată -23 euro <br /> Indicatoare rutiere -13 euro{" "}
          <br /> Nume auto personalizat -30 euro
        </p>
      </div>
      <div className="PricePage_product">
        <div className="PricePage_product_title">
          <NoCrashIcon />
          Colatare Auto
        </div>
        <p>
          Sedan -400 euro <br /> Cabina -650 euro <br /> Furg neta -800 euro
        </p>
      </div>
      <div className="PricePage_product">
        <div className="PricePage_product_title">
          <MovingIcon />
          Site
        </div>
        <p>
          Șablon -gratis <br />
          Site 1 pagină - 180 euro <br />
          Site 3 pagini - 300 euro <br />
          Site catalog - 600 euro <br />
          Site ,,card de vizită,, - 100-400 euro <br />
          Internet-magazin - 400-1600 euro <br />
          Portal - 900-2400 euro
        </p>
      </div>
    </div>
  );
};
