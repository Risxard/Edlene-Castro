import beforeImage from "../assets/Pessoa1/before.png";
import afterImage from "../assets/Pessoa1/after.png";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Pessoa1 = ({ btns }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      {selectedImage != null ? (
        <div className="depo-image-modal">
          <span onClick={() => handleSelect(null)}><FontAwesomeIcon icon={faXmark} /></span>
          <img src={selectedImage} alt="imagem em tela cheia" />
        </div>
      ) : (
        ""
      )}
      <div className="depo-images-container">
        <div className="depo-images">
          <img
            src={beforeImage}
            alt="Foto de antes"
            className="depo-image"
            onClick={() => handleSelect(beforeImage)}
          />
          <img
            src={afterImage}
            alt="Foto do depois"
            className="depo-image"
            onClick={() => handleSelect(afterImage)}
          />
        </div>
        {btns && btns}
      </div>

      <div className="depo-info">
        <h3>Depois da dieta:</h3>

        <ul>
          <li>
            <p>Hoje faço atividade física no mínimo 3x por semana.</p>
          </li>
          <li>
            <p>Uma melhora significativa na qualidade do sono.</p>
          </li>
          <li>
            <p>Tenho muito mais prazer em viver a vida.</p>
          </li>
        </ul>

        <h2>Nome Sobrenome - 23 kgs</h2>
      </div>
    </>
  );
};

export default Pessoa1;
