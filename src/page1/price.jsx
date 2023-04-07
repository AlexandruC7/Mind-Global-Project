import "./price.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import YardIcon from "@mui/icons-material/Yard";
import SignpostIcon from "@mui/icons-material/Signpost";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import MovingIcon from "@mui/icons-material/Moving";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Price = () => {
  return (
    <div>
      <div className="PricePage">
        <div className="PricePage_products">
          <div className="PricePage_products_title">
            <AddCardIcon />
            Cărți de vizită
          </div>
          <RadioGroup size="1sm" defaultValue="10" name="radio-buttons-group">
            <FormControlLabel
              value="10"
              control={<Radio />}
              label="100 buc- 10 euro"
            />
            <FormControlLabel
              value="15"
              control={<Radio />}
              label="200 buc -15 euro"
            />
            <FormControlLabel
              value="20"
              control={<Radio />}
              label="500 buc -20 euro"
            />
            <FormControlLabel
              value="25"
              control={<Radio />}
              label="700 buc -25 euro"
            />
            <FormControlLabel
              value="30"
              control={<Radio />}
              label="1000 buc - 29 euro"
            />
          </RadioGroup>
        </div>
        <div className="PricePage_products">
          <div className="PricePage_products_title">
            <ReceiptIcon />
            Pliante
          </div>
          <p>
            A4 pliant in 2 -0,70 euro/buc <br /> A3 pliant in 2 -1,20 euro/buc{" "}
            <br />
            148*210 -deschis -0,90 euro
          </p>
        </div>
        <div className="PricePage_products">
          <div className="PricePage_products_title">
            <FeaturedPlayListIcon />
            Panou Publicitar
          </div>
          <p>
            Ultra mărime ( 1250 mm -5800 *4 mm )-150 euro <br /> Mărime medie (
            1000-5000*4 mm ) -120 euro <br /> Mărime mică ( 800-500*4 mm )-100
            euro
          </p>
        </div>
        <div className="PricePage_products">
          <div className="PricePage_products_title">
            <YardIcon />
            Placuțe Personalizate
          </div>
          <p>
            Placă cu nume (520-110mm )-20 euro <br /> Placă cu text (350-200 mm
            )-25 euro <br />
            Placă luminoasă cu nume (1000-100 mm )-60 euro
          </p>
        </div>
        <div className="PricePage_products">
          <div className="PricePage_products_title">
            <SignpostIcon />
            Semne Contravenționale
          </div>
          <p>
            Adresa personalizată -23 euro <br /> Indicatoare rutiere -13 euro{" "}
            <br /> Nume auto personalizat -30 euro
          </p>
        </div>
        <div className="PricePage_products">
          <div className="PricePage_products_title">
            <NoCrashIcon />
            Colatare Auto
          </div>
          <p>
            Sedan -400 euro <br /> Cabina -650 euro <br /> Furg neta -800 euro
          </p>
        </div>
        <div className="PricePage_products">
          <div className="PricePage_products_title">
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
    </div>
  );
};
