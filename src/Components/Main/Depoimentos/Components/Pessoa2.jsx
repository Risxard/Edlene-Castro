import beforeImage from "../assets/Pessoa2/before.png";
import afterImage from "../assets/Pessoa2/after.png";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Pessoa2 = ({ btns }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelect = (image) => {
    setSelectedImage(image);
  };


  return (
    <>
      {selectedImage != null ? (
        <div className="depo-image-modal">
          <span onClick={() => handleSelect(null)}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
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
            <p>Pesava 180kg, estava prestes a passar pela bariátrica,</p>
          </li>
          <li>
            <p>mas me comprometi com o plano alimentar, já</p>
          </li>
          <li>
            <p>eliminei 55kgs de forma saudável.</p>
          </li>
        </ul>

        <h2>Felippe Leite: Perdeu - 55 kgs</h2>
      </div>
    </>
  );
};

export default Pessoa2;
