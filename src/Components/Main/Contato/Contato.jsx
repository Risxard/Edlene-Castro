import "./Contato.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

import {
  faWhatsapp,
  faTiktok,
  faYoutube,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Contato = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function clearInputs() {
    setName("");
    setEmail("");
    setAge("");
    setMessage("");

    var inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.value = "";
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || age === "" || email === "" || message === "") {
      console.log("sending");
    }

    const templateParams = {
      from_name: `${name}`,
      message: message,
      email: email,
      age: age,
    };

    emailjs
      .send(
        "service_hhgw40n",
        "template_zrptdro",
        templateParams,
        "W15P-HcRGyq90Swya"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO ", response.status, response.text);
          clearInputs();
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  };

  return (
    <div className="Contato-container" id="CONTATO">
      <div className="Contato-inner">
        <div className="Contato-title-container">
          <div>
            <h2>redes</h2>
          </div>

          <div>
            <h2>contatos</h2>
          </div>
        </div>

        <div className="Contato-content">
          <div className="social-links">
            <a href={`https://www.instagram.com/`} target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href={`https://wa.me/15551234567?text=Tenho%20interesse`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href={`https://www.tiktok.com/`} target="_blank">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href={`https://www.youtube.com/`} target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href={`https://www.linkedin.com/`} target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={`https://www.facebook.com/`} target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>

          <form method="post" className="contact-form" onSubmit={handleSubmit}>

            {/* <input className="submit-button" type="submit" /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
