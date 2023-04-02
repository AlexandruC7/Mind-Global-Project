import "./servicii.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import MovingIcon from "@mui/icons-material/Moving";
import ReceiptIcon from "@mui/icons-material/Receipt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import YardIcon from "@mui/icons-material/Yard";
import SignpostIcon from "@mui/icons-material/Signpost";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import { Serviciu } from "./serviciu";

export const Servicii = () => {
  return (
    <div className="servicii_page">
      <div className="serviciilenoastretitle">
        <h1>Serviciile Noastre</h1>
      </div>
      <div className="linie"></div>
      <div className="produse">
        <div className="produsestyle">
          <h2>Produsele</h2>
        </div>
        <div className="produse1">
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

          <div className="produs altreileaprodus">
            <div className="title">
              <FeaturedPlayListIcon />
              <h3>Panou Publicitar</h3>
            </div>
            <p className="text">
              O structură instalată atât pe fațada clădirii, chiar în fața
              intrării, cât și în interiorul camerei (birou recepție).
            </p>
          </div>
          <div className="produs al patruleaprodus">
            <div className="title">
              <YardIcon />

              <h3>Placuțe Personalizate</h3>
            </div>
            <p className="text">Logo + alte informații la preferință</p>
          </div>
          <div className="produs al cinceleaprodus">
            <div className="title">
              <SignpostIcon />
              <h3>Semne Contravenționale</h3>
            </div>
            <p className="text">
              Figuri simbolice întrebuințate pentru a marca diferite notări pe
              hărți, planșe etc. Traduceri.
            </p>
          </div>
          <div className="produs al saseleaprodus">
            <div className="title">
              <NoCrashIcon />
              <h3>Colatare Auto</h3>
            </div>
            <p className="text">Bandarea mașinii sau a unor piese Auto</p>
          </div>
        </div>
      </div>

      <div className="servicii">
        <h2>Serviciile</h2>
        <div className="produs">
          <div className="title">
            <MovingIcon />
            <h3 className="class2">Site</h3>
          </div>
          <p className="text">
            Crearea unui site bazat pe activitatea întreprinderii voastre cu
            scopul de a comercializa serviciile și produsele în mediul online
          </p>
        </div>
      </div>
      <div className="icon"></div>
    </div>
  );
};
