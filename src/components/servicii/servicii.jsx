import "./servicii.css";
import AddCardIcon from "@mui/icons-material/AddCard";
import MovingIcon from "@mui/icons-material/Moving";

export const Servicii = () => {
  return (
    <div className="newcomponent">
      <h1>Serviciile Noastre</h1>
      <div className="produse">
        <h2>Produsele</h2>
        <div className="produse1">
          <div className="produs primulprodus">
            <div className="title">
              <AddCardIcon />

              <h3 className="class">Cărți de vizită</h3>
            </div>
            <p className="text">
              cartelă cu numele Dvs., denumirea companiei şi datele de contact.
              Dimensiunile standard ale unei cărţi de vizită sunt de 90*50 mm
            </p>
          </div>
          <div className="produs aldoileaprodus">
            <h3 className="class">Pliante</h3>
            <p className="text">
              Tipăritură conținând fotografii, prospecte, cataloage, informații
              etc. imprimate pentru reclamă, îndoită de mai multe ori pentru
              comoditatea utilizării.
            </p>
          </div>
          <div className="produs altreileaprodus">
            <h3 className="class">Panou Publicitar</h3>
            <p className="text">
              O structură instalată atât pe fațada clădirii, chiar în fața
              intrării, cât și în interiorul camerei (birou recepție).
            </p>
          </div>
          <div className="produs al patruleaprodus">
            <h3 className="class">Placuțe Personalizate</h3>
            <p className="text">Logo + alte informații la preferință</p>
          </div>
          <div className="produs al cinceleaprodus">
            <h3 className="class">Semne Contravenționale</h3>
            <p className="text">
              Figuri simbolice întrebuințate pentru a marca diferite notări pe
              hărți, planșe etc. Traduceri.
            </p>
          </div>
          <div className="produs al saseleaprodus">
            <h3 className="class">Colatare Auto</h3>
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
          <p className="text2">
            Crearea unui site bazat pe activitatea întreprinderii voastre cu
            scopul de a comercializa serviciile și produsele în mediul online
          </p>
        </div>
      </div>
      <div className="icon"></div>
    </div>
  );
};
