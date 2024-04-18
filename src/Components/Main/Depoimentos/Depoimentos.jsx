import React, { useState } from "react";
import "./Depoimentos.css";
import ArrowSvg from "../../../assets/Depo/svgs/ArrowSvg";
import Pessoa1 from "./Components/Pessoa1";
import Pessoa2 from "./Components/Pessoa2";

const Depoimentos = () => {
  const [selectedPeople, setSelectedPeople] = useState(0);

  const totalPeople = 2;
  const nextPerson = () => {
    setSelectedPeople((prev) => (prev + 1) % totalPeople);
  };

  const prevPerson = () => {
    setSelectedPeople((prev) => (prev - 1 + totalPeople) % totalPeople);
  };

  const btns = (
    <>
      <span className="prev-btn" onClick={prevPerson}>
        <ArrowSvg />
      </span>
      <span className="next-btn" onClick={nextPerson}>
        <ArrowSvg />
      </span>
    </>
  );

  return (
    <div className="depoimentos-container" id="DEPO">
      <div className="title-faixa-container">
        <div className="title-faixa-inner">
          <div className="faixa-1">
            <h2>depoimentos</h2>
          </div>
          <div className="faixa-2"></div>
        </div>
      </div>

      <div className="depoimentos-inner">
        {selectedPeople === 0 && <Pessoa1 btns={btns} />}
        {selectedPeople === 1 && <Pessoa2 btns={btns} />}
      </div>
    </div>
  );
};

export default Depoimentos;
