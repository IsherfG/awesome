import React from "react";
import { Link } from "react-router-dom";
import Global from "../styles/global.css";
import i18n from "../localization/i18n";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";

function Home() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="US"
              role="button"
              size={100}
              onClick={() => changeLanguage("en")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="NL"
              role="button"
              size={100}
              onClick={() => changeLanguage("nl")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="TH"
              role="button"
              size={100}
              onClick={() => changeLanguage("th")}
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="ES"
              role="button"
              size={100}
              onClick={() => changeLanguage("es")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="IT"
              role="button"
              size={100}
              onClick={() => changeLanguage("it")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="DK"
              role="button"
              size={100}
              onClick={() => changeLanguage("da")}
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="PT"
              role="button"
              size={100}
              onClick={() => changeLanguage("pt")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="FI"
              role="button"
              size={100}
              onClick={() => changeLanguage("fi")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="PL"
              role="button"
              size={100}
              onClick={() => changeLanguage("pl")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
