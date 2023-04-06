import "./servicii.css";
import AddCardIcon from "@mui/icons-material/AddCard";

import ReceiptIcon from "@mui/icons-material/Receipt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import YardIcon from "@mui/icons-material/Yard";
import SignpostIcon from "@mui/icons-material/Signpost";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import MovingIcon from "@mui/icons-material/Moving";
import { Serviciu } from "./serviciu/serviciu";

import React from "react";

export const Servicii = () => {
  return (
    <div className="servicii_page">
      <div className="serviciilenoastretitle">
        <h1>Serviciile Noastre</h1>
      </div>

      <div>
        <div className="produsestyle">
          <h2>Produsele</h2>
        </div>
        <div className="produse">
          <Serviciu
            icon={<AddCardIcon />}
            title={"Cărți de vizită"}
            desc={
              "cartelă cu numele Dvs., denumirea companiei şi datele de contact. Dimensiunile standard ale unei cărţi de vizită sunt de 90*50 mm"
            }
          />
          <Serviciu
            icon={<ReceiptIcon />}
            title={"Pliante"}
            desc={
              " Tipăritură conținând fotografii, prospecte, cataloage, informații etc. imprimate pentru reclamă, îndoită de mai multe ori pentru comoditatea utilizării."
            }
          />
          <Serviciu
            icon={<FeaturedPlayListIcon />}
            title={"Panou Publicitar"}
            desc={
              " O structură instalată atât pe fațada clădirii, chiar în fața intrării, cât și în interiorul camerei (birou recepție)."
            }
          />
          <Serviciu
            icon={<YardIcon />}
            title={"Placuțe Personalizate"}
            desc={" Logo + alte informații la preferință."}
          />
          <Serviciu
            icon={<SignpostIcon />}
            title={"Semne Contravenționale"}
            desc={
              " Figuri simbolice întrebuințate pentru a marca diferite notări pe hărți, planșe etc. Traduceri."
            }
          />
          <Serviciu
            icon={<NoCrashIcon />}
            title={"Colatare Auto"}
            desc={" Bandarea mașinii sau a unor piese Auto"}
          />
        </div>
      </div>

      <div className="servicii">
        <h2>Serviciile</h2>

        <div className="produse">
          <Serviciu
            icon={<MovingIcon />}
            title={"Site"}
            desc={
              " Crearea unui site bazat pe activitatea întreprinderii voastre cu scopul de a comercializa serviciile și produsele în mediul online ."
            }
          />
        </div>
      </div>

      <div className="icon"></div>
    </div>
  );
};
