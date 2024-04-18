import { useState } from "react";
import "./Mapa.css";

import mapImage from "./images/MapImage.png";

const Mapa = () => {
  const [showMap, setShowMap] = useState(false);

  function handleShowMap() {
    if (!showMap) {
      setShowMap(true);
    }
  }

  return (
    <div className="Mapa-container">
      <div className="title-faixa-container">
        <div className="title-faixa-inner">
          <div className="faixa-1">
            <h2>localização</h2>
          </div>
          <span className="faixa-2">
            <h2>Manhattan Business Office</h2>
            <p>Av. Campos Sales, 901 - Sala 603.</p>
          </span>
        </div>
      </div>

      <div className="map-embed-container" onClick={() => handleShowMap()}>
        {!showMap ? (
          <img src={mapImage} alt="imagem do mapa" />
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d992.359175368497!2d-35.20160493455479!3d-5.793826169533638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b301ba5fccda19%3A0x412bdddeee351f97!2sManhattan%20Business%20Office!5e0!3m2!1spt-BR!2sbr!4v1713304719859!5m2!1spt-BR!2sbr"
            width="800"
            height="600"
            allowFullScreen="1"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Mapa;
