import React from "react";
import { Link } from "react-router-dom";
import Global from "../styles/global.css";
import i18n from "../localization/i18n";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";
import ENG from '../assets/Eng.png';
import Basque from '../assets/Basque.jpg'
import Malayalam from '../assets/Malayalam.jpg'
import Tamil from '../assets/Tamil.jpg'
import Cata from '../assets/Cataluna.jpg'
import Scot from '../assets/Scot.jpg'
import Swit from '../assets/Swit.png'

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
          <img
          src={Scot}
          alt="English Flag"
          style={{ width: 100, cursor: "pointer" }}
          onClick={() => changeLanguage("gb-sct")}
        />
          </Link>
        </div>
                <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="IE"
              role="button"
              size={100}
              onClick={() => changeLanguage("ga")}
            />
          </Link>
        </div>
                <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="GR"
              role="button"
              size={100}
              onClick={() => changeLanguage("el")}
            />
          </Link>
        </div>
        
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="NP"
              role="button"
              size={100}
              onClick={() => changeLanguage("ne")}
            />
          </Link>
        </div>
                <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="AM"
              role="button"
              size={100}
              onClick={() => changeLanguage("hy")}
            />
          </Link>
        </div>
                <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="IN"
              role="button"
              size={100}
              onClick={() => changeLanguage("hi")}
            />
          </Link>
        </div>
        
      </div>
      <div className="container">
        <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="EE"
              role="button"
              size={100}
              onClick={() => changeLanguage("et")}
            />
          </Link>
        </div>
                <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="LT"
              role="button"
              size={100}
              onClick={() => changeLanguage("lt")}
            />
          </Link>
        </div>
                <div className="Flag">
          {" "}
          <Link to="/Home">
            <Flag
              country="LK"
              role="button"
              size={100}
              onClick={() => changeLanguage("si")}
            />
          </Link>
        </div>
        
      </div>

      <div className="containerEN">
        <div className="Flag2">
          {" "}
          <Link to="/Home">
          <img
          src={Basque}
          alt="English Flag"
          style={{ width: 100, cursor: "pointer" }}
          onClick={() => changeLanguage("baq")}
        />
          </Link>
        </div>
        <div className="Flag2">
          {" "}
          <Link to="/Home">
          <img
          src={Malayalam}
          alt="English Flag"
          style={{ width: 100, cursor: "pointer" }}
          onClick={() => changeLanguage("ml")}
        />
          </Link>
        </div>
        <div className="Flag2">
          {" "}
          <Link to="/Home">
          <img
          src={Tamil}
          alt="English Flag"
          style={{ width: 100, cursor: "pointer" }}
          onClick={() => changeLanguage("ta")}
        />
          </Link>
        </div>
      </div>

      <div className="containerEN">
        <div className="Flag2">
          {" "}
          <Link to="/Home">
          <imgcms
          src={Cata}
          alt="English Flag"
          style={{ width: 100, cursor: "pointer" }}
          onClick={() => changeLanguage("cata")}
        />
          </Link>
        </div>
        <div className="Flag2">
          {" "}
          <Link to="/Home">
            <Flag
              country="MY"
              role="button"
              size={100}
              onClick={() => changeLanguage("ms")}
            />
          </Link>
        </div>
                <div className="Flag2">
          {" "}
          <Link to="/Home">
            <Flag
              country="HR"
              role="button"
              size={100}
              onClick={() => changeLanguage("hr")}
            />
          </Link>
        </div>
        <div className="Flag3">
          {" "}
          <Link to="/Home">
          <img
          src={Swit}
          alt="English Flag"
          style={{ width: 100, cursor: "pointer" }}
          onClick={() => changeLanguage("en")}
        />
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Home;
