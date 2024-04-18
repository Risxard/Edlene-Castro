import { useState } from "react";
import "./Bio.css";

import ShapeSvg1 from "../../../assets/bio svgs/Shape1";
import ShapeSvg2 from "../../../assets/bio svgs/Shape2";
import ShapeSvg3 from "../../../assets/bio svgs/Shape3";

import bioWoman from "../../../assets/bio woman/bioWoman.png";

const Historia = () => {
  return (
    <>
      <h2>
        A nutrição estava em mim desde a infância na minha jornada de
        emagrecimento.
      </h2>
      <p>
        Na vida adulta, enfermeira, funcionária pública, financeiramente estável
        e depois de emagrecer 20 kg o desejo de estudar algo “novo” inquietava o
        meu coração. Escutei da minha irmã: “Faça nutrição.
      </p>
      <p>
        Um diploma e emprego você já tem, agora faça o que você sempre teve
        PAIXÃO”.
      </p>
      <p>
        Aqui, eu alicercei um sonho, minha paixão e um propósito. Hoje sou
        nutricionista e COMPLETAMENTE realizada e apaixonada.
      </p>
    </>
  );
};

const Formacao = () => {
  return (
    <>
      <h2>
        Edlene Castro é nutricionista, com especialização em epigenética e
        pós-graduação em reprogramação epigenética eficiente.
      </h2>
      <p>
        Estuda alimentos, fitoquímicos e o impacto deles na vida e saúde das
        pessoas.
      </p>
      <p>
        Atua na área de nutrição clínica, esportiva e epigenética,
        compartilhando conhecimentos através de cursos, palestras e nas redes
        sociais.
      </p>

      <p>
        E é através disso que difunde com frequência a rotina e estilo de vida
        saudável.
      </p>
    </>
  );
};

const Proposito = () => {
  return (
    <>
      <h2>
        Certa vez uma amiga disse que o meu maior propósito ia além da nutrição.
        Ela enxergava claramente o entusiasmo que a transformação na vida das
        pessoas me causava.
      </h2>
      <p>
        Desde então tomei posse dessa verdade e movida por esses sentimentos, e
        certa de que essa essência está em meu DNA.
      </p>
      <p>
        Conto com a nutrição para resgatar a autoconfiança e autoconhecimento de
        cada um que passa por mim levando-os a suas verdades através da
        transformação.
      </p>
    </>
  );
};

const MultiSection = () => {
  const [selectedSection, setSelectedSection] = useState(1);

  const handleSelect = (section) => {
    return setSelectedSection(section);
  };
  return (
    <div className="multisection-container" id="BIO">
      <div className="multisection-inner">
        <div className="multisection-btns">
          <span
            className={selectedSection === 1 ? "active" : ""}
            onClick={() => handleSelect(1)}
          >
            <div className="filter-svg">
              <ShapeSvg1 />
            </div>

            <p>história</p>
          </span>
          <span
            className={selectedSection === 2 ? "active" : ""}
            onClick={() => handleSelect(2)}
          >
            <div className="filter-svg">
              <ShapeSvg2 />
            </div>
            <p>formação</p>
          </span>
          <span
            className={selectedSection === 3 ? "active" : ""}
            onClick={() => handleSelect(3)}
          >
            <div className="filter-svg">
              <ShapeSvg3 />
            </div>
            <p>propósito</p>
          </span>
        </div>

        <div className="multisection-content">
          <div className="multisecion-content-text"></div>
          {/* <img src={bioWoman} alt="" className="img-edlene" /> */}
          {selectedSection === 1 ? (
            <Historia />
          ) : selectedSection === 2 ? (
            <Formacao />
          ) : selectedSection === 3 ? (
            <Proposito />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSection;
