import "./HeroSection.css";

import pattern from "../../assets/pattern/PATTERN.png";
import ec from "../../assets/pattern/EC.png";

function HeroSection() {
  return (
    <div className="hero-section-container">

      <div className="ec-container">
        <img src={ec} alt="" />
      </div>
      <img src={pattern} alt="" />
    </div>
  );
}

export default HeroSection;
