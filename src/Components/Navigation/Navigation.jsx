import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

import LogoEdlene from "../../assets/nav/assets/LogoEdlene.png";

import "./Navigation.css";

import { scrollTo } from "../../functions/scrollTo/scrollTo";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const handleScrollTo = (ref) => {
    const idToScroll = document.getElementById(ref);
    if (idToScroll) {
      scrollTo(idToScroll);
    }
  };

  return (
    <nav>
      <span className="logo-edlene">
        <img src={LogoEdlene} alt="" />
      </span>

      <ul>
        <li onClick={() => handleScrollTo("BIO")}>Bio</li>|
        <li onClick={() => handleScrollTo("DEPO")}>Depoimentos</li>|
        <li onClick={() => handleScrollTo("CONTATO")}>Contato</li>
      </ul>
      <div className="social-nav-links">
        <a
          href={`https://wa.me/15551234567?text=Tenho%20interesse`}
          target="_blank"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href={`https://www.instagram.com/`} target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={`https://www.instagram.com/`} target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      <span className="ham-menu">
        <FontAwesomeIcon icon={faBars} />
      </span>
    </nav>
  );
};

export default Navigation;
