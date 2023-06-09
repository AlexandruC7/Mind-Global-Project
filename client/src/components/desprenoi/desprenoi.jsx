import "./desprenoi.scss";

import React from "react";

export function Desprenoi() {
  return (
    <div className="desprenoi" id="desprenoi">
      <div className="desprenoi-info">
        <div className="desprenoi-info_title">
          <h1>DESPRE NOI</h1>
        </div>
        <div className="desprenoi-info_linie"></div>

        <p className="desprenoi-info_text">
          Bine ai venit la noua agentie de publicitate!
        </p>
        <p className="desprenoi-info_text">
          Suntem o echipă pasionată și plină de energie, dedicată să ajutăm
          afacerile să se dezvolte și să își crească vizibilitatea prin campanii
          publicitare inovatoare și eficiente.
        </p>
        <p className="desprenoi-info_text">
          La baza abordării noastre stă înțelegerea nevoilor clienților noștri
          și a pieței în care activează. Astfel, putem dezvolta strategii
          personalizate și adaptate, care să ajute afacerile să se diferențieze
          și să se evidențieze într-un mod unic și relevant.
        </p>
        <p className="desprenoi-info_text">
          Echipa noastră este formată din experți în marketing, creativi și
          specialiști în comunicare, care pun la dispoziție cunoștințele și
          experiența lor pentru a oferi soluții integrate de publicitate, care
          să genereze rezultate reale și măsurabile pentru afacerile noastre.
        </p>
        <p className="desprenoi-info_text">
          Suntem entuziasmați să lucrăm cu afaceri de toate dimensiunile și din
          diverse domenii, și suntem convinși că putem ajuta fiecare dintre ele
          să-și atingă obiectivele și să se dezvolte în mod sustenabil. Dacă
          doriți să aflați mai multe despre serviciile noastre de publicitate,
          nu ezitați să ne contactați.
        </p>
        <p className="desprenoi-info_text">Suntem aici pentru a vă ajuta!</p>
      </div>

      <div className="desprenoi-prezentare">
        <a href="./prezentare.pdf">
          <img src="./mind_logo.jpg" alt="" />
        </a>
      </div>
    </div>
  );
}
