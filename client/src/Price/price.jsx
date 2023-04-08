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
    <div className="pricepage">
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
      <ProductsPrice
        icon={<YardIcon />}
        title="Placuțe Personalizate"
        preturi={[
          "Placă cu nume (520-110mm )",
          "Placă cu text (350-200 mm )-25 euro",
          "Placă luminoasă cu nume (1000-100 mm )-60 euro",
        ]}
      />
      <ProductsPrice
        icon={<SignpostIcon />}
        title="Semne Contravenționale"
        preturi={[
          "Adresa personalizată -23 euro",
          "Indicatoare rutiere -13 euro",
          "Nume auto personalizat -30 euro",
        ]}
      />
      <ProductsPrice
        icon={<NoCrashIcon />}
        title="Colatare Auto"
        preturi={[
          "Sedan - 400 euro",
          "Cabina - 650 euro",
          "Furg neta -800 euro",
        ]}
      />
      <ProductsPrice
        icon={<MovingIcon />}
        title="Site"
        preturi={[
          "Șablon -gratis",
          "Site 1 pagină - 180 euro",
          "Site 3 pagini - 300 euro",
          "Site catalog - 600 euro",
          "Site ,,card de vizită,, - 100-400 euro",
          "Internet-magazin - 400-1600 euro",
          "Portal - 900-2400 euro",
        ]}
      />
    </div>
  );
};
