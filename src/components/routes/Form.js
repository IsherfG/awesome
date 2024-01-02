import React from "react";
import { Link } from "react-router-dom";
import Global from "../styles/global.css";
import i18n from "../localization/i18n";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";
import ENG from '../assets/Eng.png';

function Home() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="index_container">
      <div className="containerEN">
        <div className="Flag1">
          {" "}
          <Link to="/Home">
          <img
          src={ENG}
          alt="English Flag"
          style={{ width: 100, cursor: "pointer" }}
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
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="SA"
              role="button"
              size={100}
              onClick={() => changeLanguage("ar")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="LV"
              role="button"
              size={100}
              onClick={() => changeLanguage("lv")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="KR"
              role="button"
              size={100}
              onClick={() => changeLanguage("ko")}
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="UA"
              role="button"
              size={100}
              onClick={() => changeLanguage("ua")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="JP"
              role="button"
              size={100}
              onClick={() => changeLanguage("jp")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="NO"
              role="button"
              size={100}
              onClick={() => changeLanguage("no")}
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="CN"
              role="button"
              size={100}
              onClick={() => changeLanguage("zh_CN")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="TW"
              role="button"
              size={100}
              onClick={() => changeLanguage("zh_tw")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="MT"
              role="button"
              size={100}
              onClick={() => changeLanguage("mt")}
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="PH"
              role="button"
              size={100}
              onClick={() => changeLanguage("tl")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="RU"
              role="button"
              size={100}
              onClick={() => changeLanguage("ru")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="MM"
              role="button"
              size={100}
              onClick={() => changeLanguage("mm")}
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="FR"
              role="button"
              size={100}
              onClick={() => changeLanguage("fr")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="DE"
              role="button"
              size={100}
              onClick={() => changeLanguage("de")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="SE"
              role="button"
              size={100}
              onClick={() => changeLanguage("sv")}
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="BG"
              role="button"
              size={100}
              onClick={() => changeLanguage("bg")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="HU"
              role="button"
              size={100}
              onClick={() => changeLanguage("hu")}
            />
          </Link>
        </div>
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="VA"
              role="button"
              size={100}
              onClick={() => changeLanguage("va")}
            />
          </Link>
        </div>
        
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="GB-SCT"
              role="button"
              size={100}
              onClick={() => changeLanguage("en")}
            />
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
